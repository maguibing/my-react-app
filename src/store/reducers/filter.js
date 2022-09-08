import {CHANGE_STATUS} from '../actions/actionTypes'

export const filters = (state = 'all', action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return action.payload
        default:
            return state
    }
}