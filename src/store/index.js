import { createStore, applyMiddleware} from "redux";

import {composeWithDevTools} from 'redux-devtools-extension'
// 引入thunk中间件(可以让派发的action可以是一个函数)
import thunk from 'redux-thunk'
// 引入合并后的reducer
import cRducer from "./reducer";

// 创建store并传递: 1.reducer(纯函数) 2.StoreEnhancer
const store = createStore(cRducer, composeWithDevTools(applyMiddleware(thunk)))

export default store