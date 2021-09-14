import * as actionType from './actionType'
import { getSongDetail } from '../../../service/player'

// 歌曲详情Action
const changeCurrentSongAction = (currentSong) => ({
    type: actionType.CHANGE_CURRENT_SONG,
    currentSong
})

// 歌曲详情network request
export const getSongDetailAction = (idx) => {
    return (dispath) => {
        getSongDetail(idx).then(res => {
            console.log(res)
            const song = res.songs && res.songs[0]
            console.log(song)
            // 更改当前播放歌曲
            dispath(changeCurrentSongAction(song))
        })
    }
}