import { GETARTICLE_LIST } from '../actions/actionTypes'
const initialState =[]

export const articleList = (state = initialState, action) => {
    switch (action.type) { 
        case GETARTICLE_LIST:
            return action.payload
        default:
            return state
    }   
}
