import {createStore,applyMiddleware} from 'redux'

import Reducer from './reducers'
// import logger from 'redux-logger' // 记录日志
import thunk from 'redux-thunk'  // 处理异步
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)))

export default store