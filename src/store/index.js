import {createStore,applyMiddleware} from 'redux'

import Reducer from './reducers'
import logger from 'redux-logger' // 记录日志
import thunk from 'redux-thunk'  // 处理异步

const store = createStore(Reducer,applyMiddleware(logger,thunk))

export default store