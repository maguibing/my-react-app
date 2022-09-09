import {combineReducers} from 'redux'
// import todos from './todos'
// import {filters} from './filter'


import {channel} from './channel'
import {articleList} from './articleList'

export default combineReducers({
    // todos,
    // filters,
    channel,
    articleList
})