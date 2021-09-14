import React, {memo} from 'react'

import './index.less'
export default memo(function UserLogin(props) {
    return (
        <div className='user-login-wrapper'>
            <div className='profile-info'>
                <p className="login-detail">
                    登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
                </p>
                <button className='user-login'>用户登录</button>
            </div>
        </div>
    )
})