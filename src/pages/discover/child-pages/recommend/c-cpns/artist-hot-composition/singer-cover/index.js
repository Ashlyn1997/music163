import React, { memo } from 'react'
import {getSizeImage} from "../../../../../../../utils/format-utils";

import './index.less'

export default memo(function SingerCover(props) {
    const { info } = props
    return (
        <a className='singer-cover-wrapper' href={info.detail} target="_blank">
            <div className="singer-cover-image">
                <img src={getSizeImage(info.picUrl, 62)} alt="" />
            </div>
            <div className="singer-title">
                <div className="singer-name">{info.name}</div>
                <div className="singer-detail">流行歌手</div>
            </div>
        </a>
    )
})