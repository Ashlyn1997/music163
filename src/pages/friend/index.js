import React, { memo } from 'react'
import './index.less'
export default memo(function Friend () {
    let isLogin = false
    return (
        <div className='friend' style={{display : !isLogin ? 'block' : 'none'}}>
            <div className='friend-wrapper content'>
                <h2>登陆网易云音乐</h2>
                <div className="detail">
                    你可以关注明星和好友品味他们的私房歌单
                    通过他们的动态发现更多精彩音乐
                </div>
                <div className='btn-login'>立即登录</div>
            </div>
        </div>
    )
})