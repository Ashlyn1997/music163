import React, {memo, useEffect} from 'react'
import ThemeHeader from "../../../../../../components/theme-header";
import TopRanking from '../../../../../../components/top-ranking'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getTopListAction} from "../../store/actionCreators";

import './index.less'


export default memo(function RecommendRanking(props) {
    // state/props
    const {upRanking = [], originRanking = [], newRanking = [] } = useSelector(state => ({
        upRanking: state.getIn(['recommend', 'upRanking']),
        originRanking: state.getIn(['recommend', 'originRanking']),
        newRanking: state.getIn(['recommend', 'newRanking'])
    }), shallowEqual)
    const dispatch = useDispatch()
    // other hook
    // other hook

    useEffect(() => {
        dispatch(getTopListAction(19723756))
        dispatch(getTopListAction(3779629))
        dispatch(getTopListAction(2884035))
    }, [dispatch])
    return (
        <div className='ranking-wrapper'>
            <ThemeHeader title='榜单'/>
            <div className='ranking-info'>
                <TopRanking info={originRanking} index={2} {...props}/>
                <TopRanking info={upRanking} index={0} {...props}/>
                <TopRanking info={newRanking} index={1} {...props}/>
            </div>
        </div>
    )
})