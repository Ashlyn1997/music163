import { memo, useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import { ClearOutlined, CloseOutlined, HeartOutlined } from '@ant-design/icons';
import PlaylistItem from './c-cpns/playlist-item';
import LyricContent from './c-cpns/lyric-content';
import Sortable from 'sortablejs'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
    changePlaylistAndCount,
    getSongDetailAction,
    changePlayListAction,
    // changeSongIndexAction
} from '../../../store/actionCreator';
import { removeAllSong, resetPlaylistId } from '../../../../../utils/localstorage'
import './index.less'
function SliderPlaylist(props) {
    const {
        isShowSlider,
        playlistCount,
        closeWindow,
        playMusic,
        changeSong,
    } = props;
    // redux hook
    const dispatch = useDispatch()
    const { currentSong, playList, currentSongIndex } = useSelector(
        (state) => ({
            currentSong: state.getIn(['player', 'currentSong']),
            playList: state.getIn(['player', 'playList']),
            currentSongIndex: state.getIn(['player', 'currentSongIndex']),
        }),
        shallowEqual
    );
    // other hook
    const playlistRef = useRef();
    // 歌曲列表拖拽初始化
    useEffect(() => {
        const el = playlistRef.current.querySelector('.main-playlist');
        new Sortable(el, {
            sort: true,
            animation: 200,
            currentIndex: 0,
            onEnd: function (evt) {
                // 拖拽结束发生该事件
                // tableData 改成自己的数组
                let tempPlayList = playList;
                // 看看能否获取当前歌曲对象 👇
                const musicsId = []
                tempPlayList.splice(
                    evt.newIndex,
                    0,
                    playList.splice(evt.oldIndex, 1)[0]
                );
                // 更改播放列表顺序
                dispatch(changePlayListAction(tempPlayList));
                musicsId.push(...tempPlayList.map((item) => item.id))
                // 重置歌曲列数组
                resetPlaylistId(musicsId)
                /* 
                  两个问题：
                    情况一：如果是拖拽当前播放的歌曲，直接改变索引
                    情况二：如果拖拽是其他歌曲，那么不改变索引
                */

                // console.log(`当前播放的索引${currentSongIndex}  正在拖拽的索引${evt.newIndex}`, this)
                // 更改播放索引 拖拽的顺序 有问题 
                // dispatch(changeSongIndexAction(evt.newIndex))
                /* 
                  判断是否是当前播放的歌曲被拖拽了，如果是那就改变索引
                  如何判断：oldIndex和redux中保存的currentIndex进行对比，如果是那就进行改变索引
                  还是有问题！！！(回头再改)
                */
                // if (currentSongIndex === evt.oldIndex) {
                //   dispatch(changeSongIndexAction(evt.newIndex));
                // }
                // console.log(
                //   'currentSongIndex, evt.oldIndex',
                //   currentSongIndex,
                //   evt.oldIndex
                // );
                // console.log('currentSongIndex', currentSongIndex, changeSongIndexAction)
            },
        });

    }, [currentSongIndex, dispatch, playList, currentSong]);

    // other function
    // 清除全部歌曲
    const clearAllPlaylist = (e) => {
        e.preventDefault();
        removeAllSong()
        playList.splice(0, playList.length);
        dispatch(changePlaylistAndCount(playList));
    };

    // 点击item播放音乐
    const clickItem = (index, item) => {
        // 播放音乐 dispatch
        dispatch(getSongDetailAction(item.id));
        playMusic();
    };
    return (
        <div className='play-list-wrapper'
            style={{ visibility: isShowSlider ? 'visible' : 'hidden' }}
            // 阻止事件冒泡
            onClick={(e) => e.stopPropagation()}
        >
            <div className='play-list-header'>
                <div className='left'>
                    <h3 className='header-title'>播放列表</h3>
                    <div>
                        <a
                            href="/favorite"
                            className="header-icon"
                            onClick={(e) => e.preventDefault()}
                        >
                            <HeartOutlined />
                            <span>收藏一下</span>
                        </a>
                        <a
                            href="/clear"
                            onClick={(e) => clearAllPlaylist(e)}
                            className="header-icon"
                        >
                            <ClearOutlined />
                            <span>清除播放列表</span>
                        </a>
                    </div>
                </div>
                <div className='right'>
                    <div className="song-name">{currentSong.name}</div>
                    <div className="close-window" onClick={closeWindow}>
                        <CloseOutlined />
                    </div>
                </div>
            </div>
            <div className='play-list-main' ref={playlistRef}>
                <div className="main-playlist">
                    {playList &&
                        playList.map((item, index) => {
                            return (
                                <PlaylistItem
                                    key={item.id}
                                    isActive={
                                        (currentSongIndex ? currentSongIndex : 0) === index
                                            ? 'active'
                                            : ''
                                    }
                                    songName={item.name}
                                    singer={item.ar[0].name}
                                    duration={item.dt}
                                    clickItem={() => clickItem(index, item)}
                                    songId={item.id}
                                    nextMusic={() => changeSong(1)}
                                />
                            );
                        })}
                </div>
                <div className='main-line'></div>
                <LyricContent />
            </div>
        </div>
    )
}

SliderPlaylist.propTypes = {
    isShowSlider: propTypes.bool.isRequired,
    playlistCount: propTypes.number.isRequired,
}

export default memo(SliderPlaylist)