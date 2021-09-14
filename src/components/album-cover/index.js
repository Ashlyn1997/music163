import React, { memo } from 'react'
import { getSizeImage } from '../../utils/format-utils.js'
import './index.less'

export default memo(function AlbumCover(props) {
    // 对图片使用工具函数限制大小
    const { info } = props

    return (
        <div className='album-cover-wrapper'>
            <div className='album-image'>
                <img src={getSizeImage(info.picUrl, 100)} alt={info.name} />
                <a href="/discover/recommend" className="no-link image_cover cover">{info.name}</a>
            </div>
            <div className='album-name'>{info.name}</div>
            <div className='artist'>{info.artist.name}</div>
        </div>
    )
})