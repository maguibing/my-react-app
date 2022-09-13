import { GET_LIST,ARTICLE_LIST } from '../actions/actionTypes'
const initial = {
    channelList: [],
    results: [],
    page: 1,
    per_page: 10,
    total_count: 0
}
export const article = (state = initial, action) => { 
    switch (action.type) { 
        case GET_LIST:
            return {
                ...state,
                channelList:action.payload.map(v=>v)
            }
        case ARTICLE_LIST:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}