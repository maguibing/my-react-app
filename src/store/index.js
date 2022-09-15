import {createStore,applyMiddleware} from 'redux'

import Reducer from './reducers'
// import logger from 'redux-logger' // 记录日志
import thunk from 'redux-thunk'  // 处理异步

let middlewares = null
if (process.env.NODE_ENV === 'production') {
  // 生产环境，只启用 thunk 中间件
  middlewares = applyMiddleware(thunk)
} else {
  // 开发环境
  const { composeWithDevTools } = require('redux-devtools-extension')
  middlewares = composeWithDevTools(applyMiddleware(thunk))
}

const store = createStore(Reducer,middlewares)

export default store