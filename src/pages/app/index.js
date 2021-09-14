import { memo, useState, Suspense } from "react";
import { useDispatch } from "react-redux";
import { renderRoutes } from 'react-router-config'
import routes from "../../router";
import { getLoginProfileInfo } from "../../components/theme-login/store/actionCreator";
import { Skeleton } from 'antd'
import ThemeDialog from "../../components/theme-dialog";
import { setLoginInfo, getLoginInfo } from '../../utils/secret-key'
import initLoginInfo from '../../config/token'

export default memo(function AppWrapper() {
    // props/state
    const [isShow, setIsShow] = useState(false)
    // redux hook
    const dispatch = useDispatch()
    // other handle
    // 初始化
    const initLogin = () => {
        // 存在登录信息
        if (localStorage.getItem('loginInfo') != null) {
            const { username, password } = getLoginInfo('loginInfo')
            username && password
                ? dispatch(getLoginProfileInfo(username, password))
                : console.log('当前登录的默认信息')
        }
        // 不存在登录信息
        else {
            setLoginInfo('loginInfo', initLoginInfo)
        }
    }
    initLogin()
    //other function
    const handleOk = () => {
        setIsShow(false)
    }
    const handleCancel = () => {
        setIsShow(false)
    }
    return (
        <>
            {/* <Suspense fallback={<Skeleton active />}>{renderRoutes(routes)}</Suspense> */}
            {renderRoutes(routes)}
            <ThemeDialog
                controlShow={isShow}
                title="上传音乐"
                handleOk={handleOk}
                handleCancel={handleCancel}
            >
                <h2>hello dialog</h2>
                <h3>上传音乐</h3>
            </ThemeDialog>
        </>
    )
})