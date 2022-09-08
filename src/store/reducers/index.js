import {combineReducers} from 'redux'
import todos from './todos'
import {filters} from './filter'

export default combineReducers({
    todos,
    filters
})