import { combineReducers } from 'redux-immutable'
// 引入recommend页面的store
import { reducer as recommendReducer } from '../pages/discover/child-pages/recommend/store'
import { reducer as playerReducer } from '../pages/player/store'
import { reducer as loginReducer } from '../components/theme-login/store'

// 将多个reducer合并
const cRducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
    loginState: loginReducer
})
export default cRducer
