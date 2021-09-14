import React, { memo, useEffect } from 'react'
import ThemeHeader from "../../../../../../components/theme-header";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getHotRecommendAction} from "../../store/actionCreators";
import SongCover from "../../../../../../components/song-cover";
import './index.less'

const HOT_RECOMMEND_LIMIT = 8
export default memo(function HotRecommend(props) {
    //redux hook
    const dispatch = useDispatch()
    const { hotRecommends } = useSelector(
        state => ({
            hotRecommends: state.getIn(['recommend', 'hotRecommends']),
        }),
        shallowEqual
    )
    useEffect(() => {
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
    }, [dispatch])
    return (
        <div className='hot-recommend-wrapper'>
            <ThemeHeader
                title='热门推荐'
                keywords={['华语', '流行', '摇滚', '民谣', '电子']}
            />
            <div className='recommend-list'>
                {hotRecommends && hotRecommends.map((item) => {
                    return (
                        <SongCover key={item.id} info={item} className="recommend-list">
                            {item.name}
                        </SongCover>
                    )
                })}
            </div>
        </div>
    )
})