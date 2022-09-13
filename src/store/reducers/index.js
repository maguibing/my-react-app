import {combineReducers} from 'redux'
import { user } from './user'
import { article } from './article'
import { publish } from './publish'
export default combineReducers({
    user,
    article,
    publish
})