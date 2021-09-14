import React, { memo } from 'react'
import propTypes from 'prop-types'
import './index.less'

const ThemeHeader = function (props) {
    const { title, right, keywords, showIcon } = props
    return (
        <div className='theme-header-wrapper'>
            <div className='theme-header-left'>
                <h2 className="hot-title">
                    <a href="/" className="no-link hot-text">
                        {title}
                    </a>
                </h2>
                <ul className="keywords">
                    {keywords.map(item => {
                        return (
                            <li className="item" key={item}>
                                <a href="/" >{item}</a>
                                <span className="line">|</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='theme-header-right'>
                <span>{right}</span>
                {showIcon && <i className='icon'></i>}
            </div>
        </div>
    )
}

ThemeHeader.propTypes = {
    title: propTypes.string.isRequired,
    keywords: propTypes.array,
    showIcon: propTypes.bool,
    right: propTypes.any,
}

ThemeHeader.defaultProps  = {
    keywords: [],
    showIcon: true,
    right: '更多'
}

export default memo(ThemeHeader)
