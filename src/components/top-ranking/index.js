import React, {memo} from 'react'

import './index.less'
import {getSizeImage} from "../../utils/format-utils";

export default memo(function TopRanking(props) {
    const { info, index } = props
    const { tracks = [] } = info
    return (
        <div className='top-ranking-wrapper'>
            <div className='ranking-header'>
                <div className='ranking-image'>
                    <img src={getSizeImage(info.coverImgUrl, 80)} alt=""/>
                    <div className='ranking-image-cover'>{info.name}</div>
                </div>
                <div className='ranking-tit'>
                    <div>
                        <h3>{info.name}</h3>
                    </div>
                    <div className='ranking-btn'>
                        <a href="/discover/recommend" className="no-link sprite_02 text-indent play">
                            播放
                        </a>
                        <a href="/discover/recommend" className="no-link sprite_02 text-indent favourite">
                            收藏
                        </a>
                    </div>
                </div>
            </div>
            <div className='ranking-list'>
                {tracks &&
                tracks.length > 0 &&
                tracks.slice(0, 10).map((item, index) => {
                    return (
                        <div key={item.id} className="list-item">
                            <div className="number">{index + 1}</div>
                            <a href="/play" className="song-name">
                                {item.name}
                            </a>
                            <div className="operation">
                                <a
                                    href="/discover/recommend"
                                    className="sprite_02 btn play"
                                >
                                    {item.name}
                                </a>
                                <a
                                    href="/discover/recommend"
                                    className="sprite_icon2 btn addto"
                                >
                                    {item.name}
                                </a>
                                <a href="/play" className="no-link sprite_02 btn favourite">
                                    {item.name}
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='ranking-footer'>
                <a href="/" className="show-all">
                    查看全部&gt;
                </a>
            </div>
        </div>
    )
})