import React, { memo, useRef } from 'react'
// import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import { getPlayUrl } from '../../../utils/format-utils'
import {NavLink} from "react-router-dom";
// import { CSSTransition } from 'react-transition-group';
// import SliderPlaylist from './c-cpns/slider-playlist';

import {Slider, Tooltip} from "antd";
import { DownloadOutlined, UndoOutlined } from '@ant-design/icons';
import './index.less'


export default memo(function AppPlayerBar() {

    // other hook
    const audioRef = useRef()

    return (
        <div className='player-bar-wrapper'>
            <div className='player-content'>
                <div className='player-control'>
                    <button className='player-btn-pre'></button>
                    <button className='player-btn-play'></button>
                    <button className='player-btn-next'></button>
                </div>
                <div className='player-info'>
                    <NavLink to={{pathname: '/discover/song'}} className="player-info-image" >
                        <img src='' alt="" />
                    </NavLink>
                    <div className='play-detail'>
                        <div className="play-song-info">
                            <NavLink to="/discover/song" className="song-name">
                                songName
                            </NavLink>
                            <a href="/author" className="no-link singer-name">
                                singerName
                            </a>
                        </div>
                        <Slider
                            defaultValue={0}
                        />
                    </div>
                    <div className='song-time'>
                        <span className="now-time">time</span>
                        <span className="total-time">
                        {' '}/time
                        </span>
                    </div>
                </div>
                <div className='player-operator'>
                    <div className='player-operator-left'>
                        <Tooltip title='下载音乐'>
                            <a href='/'>
                                <DownloadOutlined />
                            </a>
                        </Tooltip>
                        <Tooltip title="重新播放">
                            <UndoOutlined className="refresh" />
                        </Tooltip>
                    </div>
                    <div className='player-operator-right sprite_player'>
                        <Tooltip title="调节音量">
                            <button className="sprite_player btn volume"></button>
                        </Tooltip>
                        <Tooltip title='单曲循环'>
                            <button className="sprite_player btn loop"></button>
                        </Tooltip>
                        <button className='sprite_player btn playlist'>
                            <Tooltip title="播放列表">
                                <span>3</span>
                            </Tooltip>
                            {/* <CSSTransition>
                                <SliderPlaylist

                                />
                            </CSSTransition> */}
                        </button>
                    </div>
                    {/* Slide音乐条 */}
                    <div className='sprite_player top-volume'>
                        <Slider vertical defaultValue={30} />
                    </div>
                </div>
            </div>
            <audio
               id="audio"
               ref={audioRef}
            />
        </div>
    )
})