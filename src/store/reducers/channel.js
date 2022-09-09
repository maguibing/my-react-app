import { GET_CHANNEL,CHANGE_ACTIVE } from '../actions/actionTypes'

const initialState = {
    list: [],
    activeId: 0
  }

export const channel = (state = initialState, action) => {
    switch (action.type) { 
        case GET_CHANNEL:
            return {
                ...state,
                list:action.payload.map(v=>v)
            }
        case CHANGE_ACTIVE:
            return {
                ...state,
                activeId:action.payload
            }
        default:
            return state
    }
}
