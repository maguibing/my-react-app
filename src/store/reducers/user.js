import { SET_TOKEN } from '../actions/actionTypes'
import { getToken } from '@/utils/auth'
const initial = {
    token:getToken()
}

export const user = (state = initial, action) => {
    switch (action.type) { 
        case SET_TOKEN:
            return {...state, token:action.payload}
        default:
            return state
    }
}