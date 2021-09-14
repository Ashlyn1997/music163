import React, { memo } from 'react'
import HotRecommend from './c-cpns/hot-recommend'
import TopBanners from "./c-cpns/top-banners";
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotArtist from './c-cpns/hot-artist'
import './index.less'
export default memo(function Recommend (props) {
    return (
        <div className='recommend-wrapper'>
            <TopBanners/>
            <div className='content'>
                <div className='recommend-left'>
                    {/*热门推荐*/}
                    <HotRecommend/>
                    {/*新碟上架*/}
                    <NewAlbum/>
                    {/*榜单*/}
                    <RecommendRanking/>
                </div>
                <div className='recommend-right'>
                    {/*登录*/}
                    <UserLogin />
                    {/*入驻歌手*/}
                    <SettleSinger />
                    {/*热门主播*/}
                    <HotArtist/>
                </div>
            </div>
        </div>
    )
})