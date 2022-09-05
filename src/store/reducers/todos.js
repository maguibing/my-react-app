import { DEL_TODO,TOGGLE_TODO,ADD_TODO } from '../actions/actionTypes'

const initState = [
    { id: 1, text: '吃饭', done: true },
    { id: 2, text: '学习', done: false },
    { id: 3, text: '睡觉', done: true }
]

const todos = (state = initState, action) => {
    switch (action.type) { 
        case DEL_TODO: 
            return state.filter(v => v.id !== action.payload)
        case TOGGLE_TODO: 
            return state.map(v => { 
                if (v.id !== action.payload) return v  
                return {  ...v, done:!v.done }
            })
        case ADD_TODO:
            const id = state.length > 0 ? state.length + 1 : 1
            return [
                ...state,
                { 
                    id,
                    done: false,
                    text:action.payload
                }
            ]
        default:
            return state
    }
}

export default todos