import { SET_TOKEN,USER_INFO } from '../actions/actionTypes'
import { getToken } from '@/utils/auth'
const initial = {
    token: getToken(),
    name:""
}

export const user = (state = initial, action) => {
    switch (action.type) { 
        case SET_TOKEN:
            return { ...state, token: action.payload }
        case USER_INFO:
            return {
                ...state, name:action.name
            }
        default:
            return state
    }
}