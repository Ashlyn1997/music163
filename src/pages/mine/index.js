import React, {memo} from 'react'
import './index.less'
export default memo(function Mine () {
    let isLogin = false
    return (
        <div className='not-login' style={{display : !isLogin ? 'block' : 'none'}}>
            <div className='show-no-login'>
                <div className='my_music inner'>
                    <h2>登陆网易云音乐</h2>
                    <div className='my_music btn-login'>立即登陆</div>
                </div>
            </div>
        </div>
    )
})