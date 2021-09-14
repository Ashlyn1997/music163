import React, { memo } from 'react'
import { dicoverMenu } from '../../common/local-data'
import { NavLink } from 'react-router-dom'
import './index.less'

function AppNavBar() {
    // other handle
    return (
        <div className='nav-bar-wrapper'>
            <ul className="category-list">
                {dicoverMenu.map((item) => {
                    return (
                        <li key={item.title} className="item">
                            <NavLink to={item.link} activeClassName="menu-active">
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default memo(AppNavBar)
