import request from './request'

//轮播图
export function getTopBanners() {
    return request({
        url: '/banner'
    })
}

//热门推荐
export function getHotRecommends(limit) {
    return request({
        url: '/personalized',
        params: {
            limit
        }
    })
}

//新碟上架
export function getNewAlbums() {
    return request({
        url: '/album/newest'
    })
}

// 入驻歌手
export function getSettleSinger(limit) {
    return request({
        url: '/artist/list',
        params: {
            limit
        }
    })
}