import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { scrollTo } from '../../../../../../../utils/ui-helper'

import './index.less'
export default memo(function LyricContent() {
  // redux hook
  const { lyricList, currentLyricIndex } = useSelector(
    state => ({
      lyricList: state.getIn(['player', 'lyricList']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
    }),
    shallowEqual
  )

  // other hooks
  const panelRef = useRef()
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex])

  return (
    <div className='lyric-content-wrapper' ref={panelRef}>
      <div className="lyric-content">
        {lyricList && lyricList.map((item, index) => {
          return (
            <div
              key={index}
              className={
                'lyric-item ' + (currentLyricIndex === index ? 'active' : '')
              }
            >
              {item.content}
            </div>
          )
        })}
      </div>
    </div>
  )
})
