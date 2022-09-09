import { GET_CHANNEL,CHANGE_ACTIVE } from '../actions/actionTypes'

const initialState = {
    list: [],
    activeId: null
  }

export const channel = (state = initialState, action) => {
    switch (action.type) { 
        case GET_CHANNEL:
            return {
                // ...state,
                activeId:action.payload[0].id,
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
