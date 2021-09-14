import React from "react";
import { NavLink } from "react-router-dom";
import { headerLinks } from "../../common/local-data";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Input, Dropdown, Menu } from "antd";
import { SearchOutlined, DownOutlined } from '@ant-design/icons'
import ThemeLogin from '../theme-login'
import { changeIsVisible } from '../theme-login/store'
import { clearLoginState } from "../../utils/secret-key";
import './index.less'

export default function AppHeader() {
    // redux hook
    const dispatch = useDispatch();
    const { isLogin, profile } = useSelector(
        (state) => ({
            isLogin: state.getIn(['loginState', 'isLogin']),
            profile: state.getIn(['loginState', 'profile']),
        }),
        shallowEqual
    );
    // 用户下拉JSX
    const profileDwonMenu = () => {
        return (
            isLogin ? (
                <Menu>
                    <Menu.Item>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                        >
                            {profile.nickname}
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            rel="noopener noreferrer"
                            href="#/user"
                        >
                            我的主页
                        </a>
                    </Menu.Item>
                    <Menu.Item danger onClick={() => clearLoginState()}>退出登录</Menu.Item>
                </Menu>
            ) : ''
        );
    };
    const showProfileContent = () => {
        return (
            <img src={profile.avatarUrl} alt="" className="profile-img" />
            // <div>
            //   <img src={profile.avatarUrl} alt="" className="profile-img" />
            //   {/* <span>{profile.nickname}</span> */}
            // </div>
        )
    }
    return (
        <div className='header-wrapper'>
            <div className='content'>
                <div className='header-left'>
                    <h1>
                        <a href="#/" className="logo sprite_01">
                            网易云音乐
                        </a>
                    </h1>
                    <div className="header-group">
                        {headerLinks.map((item, index) => {
                            return (
                                <NavLink
                                    key={item.title}
                                    to={item.link}
                                    className="header-item"
                                    activeClassName="link-active"
                                >
                                    <span>{item.title}</span>
                                    <i className="icon"></i>
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
                <div className='header-right'>
                    <div className='search-wrapper'>
                        <Input
                            className="search"
                            placeholder="音乐/歌手"
                            size="large"
                            prefix={<SearchOutlined />}
                        />
                    </div>
                    <div className="center">创作者中心</div>
                    <Dropdown overlay={profileDwonMenu}>
                        <div
                            className='login'
                            onClick={() => !isLogin && dispatch(changeIsVisible(true))}>
                            <a
                                href='www.baidu.com'
                                className='ant-dropdown-link'
                                onClick={(e) => e.preventDefault()}
                            >
                                {isLogin ? showProfileContent() : '登录'} <DownOutlined />
                            </a>
                        </div>
                    </Dropdown>
                </div>
            </div>
            <div className="red-line"></div>
            <ThemeLogin />
        </div>
    )
}
