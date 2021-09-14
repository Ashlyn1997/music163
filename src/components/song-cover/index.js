import React, { memo } from 'react'
import {getCount, getSizeImage} from "../../utils/format-utils";
import './index.less'
function SongCover(props) {
    const { info } = props
    const picUrl = (info && (info.picUrl || info.coverImgUrl))
    const name = (info && info.name)
    // playCount 播放次数
    const playCount = (info && info.playCount) || 0
    // nickname
    const nickname = (info && info.copywriter)
    // id
    //const songInfoId = (info && info.id)
    return (
        <div className='song-cover-wrapper'>
            <div className='cover-wrapper'>
                <img src={getSizeImage(picUrl, 140)} alt=""/>
                <div className='cover-mask sprite_cover'>
                    <div className='bottom-bar sprite_cover'>
                        <span>
                            <i className="sprite_icon erji"></i>
                            {getCount(playCount)}
                        </span>
                        <i className="sprite_icon play"></i>
                    </div>
                </div>
            </div>
            <div className="cover-title text-nowrap">by-{name}</div>
            <div className="cover-source text-nowrap">
                by {(info && info.copywriter) || nickname}
            </div>
        </div>
    )
}

export default memo(SongCover)