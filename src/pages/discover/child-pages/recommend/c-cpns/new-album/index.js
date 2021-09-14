import React, {memo, useEffect, useRef} from 'react'
import ThemeHeader from "../../../../../../components/theme-header";
import {Carousel} from "antd";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getNewAlbumsAction} from "../../store/actionCreators";
import AlbumCover from '../../../../../../components/album-cover'
import './index.less'
export default memo(function NewAlbum(){
    //redux hook
    const dispatch = useDispatch()
    const { newAlbums } = useSelector(
        state => ({
            newAlbums: state.getIn(['recommend', 'newAlbums'])
        }),
        shallowEqual
    )
    //other hook
    const albumRef = useRef()
    //新碟上架，发送网络请求
    useEffect(() => {
        dispatch(getNewAlbumsAction())
    }, [dispatch])

    //轮播图布局思路：两个页面轮播：2page；在page中添加一个个item
    return (
        <div className='new-album-wrapper'>
            <ThemeHeader title='新碟上架'/>
            <div className='new-album-content'>
                <div className='inner'>
                    <Carousel dots={false} ref={albumRef}>
                        {[0, 1].map(item => {
                            return (
                                <div key={item} className="page">
                                    {/* item * 5, (item+1) * 5   第一次遍历0  5  第二次遍历 5  10  */}
                                    {newAlbums && newAlbums.slice(item * 5, (item + 1) * 5).map(cItem => {
                                        return (
                                            <AlbumCover
                                                key={cItem.id}
                                                info={cItem}
                                            >
                                                {cItem.name}
                                            </AlbumCover>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                <div
                    className='arrow arrow-left'
                    onClick={e => albumRef.current.prev()}
                ></div>
                <div
                    className='arrow arrow-right'
                    onClick={e => albumRef.current.next()}
                ></div>
            </div>
        </div>
    )
})