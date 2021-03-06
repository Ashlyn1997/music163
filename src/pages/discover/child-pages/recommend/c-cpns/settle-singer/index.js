import React, {memo, useEffect} from "react";
import ArtistHeaderLine from '../artist-hot-composition/artist-head-line'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getSettleSingerAction} from "../../store/actionCreators";
import {SETTLE_SINGER_COUNT} from "../../../../../../common/constants";
import SingerCover from '../artist-hot-composition/singer-cover'
import './index.less'
export default memo(function SettleSinger() {
    //redux hook
    const { settleSinger } = useSelector(
        state => ({
            settleSinger: state.getIn(['recommend', 'settleSinger']),
        }),
        shallowEqual
    )
    const dispatch = useDispatch()

    // other hook
    useEffect(() => {
        dispatch(getSettleSingerAction(SETTLE_SINGER_COUNT))
    }, [dispatch])
    return (
        <div className='settle-singer-wrapper'>
            <ArtistHeaderLine titleSlot="入驻歌手" rightSlot="查看全部 >" />
            <div className='singer-container'>
                {settleSinger && settleSinger.map(item => {
                    return <SingerCover key={item.id} info={item} />
                })}
            </div>
        </div>
    )
})