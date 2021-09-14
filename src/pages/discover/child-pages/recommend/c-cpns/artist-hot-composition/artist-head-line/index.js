import React, { memo } from 'react'
import './index.less'
export default memo(function ArtistHeaderLine(props) {
    const { titleSlot, rightSlot } = props
    return (
        <div className='header-line-wrapper'>
            <div className="hot-artist">{titleSlot}</div>
            <a href="/discover/recommend" className="show-all">{rightSlot}</a>
        </div>
    )

})