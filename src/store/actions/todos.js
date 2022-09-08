import { DEL_TODO,TOGGLE_TODO,ADD_TODO,CHECK_ALL,CLEAR_DONE,EDIT_TEXT,CHANGE_STATUS } from "./actionTypes";


const delTodo = (id) => ({ type: DEL_TODO, payload: id })
const toggleFn = (id) => ({type:TOGGLE_TODO,payload:id})
const addTodo = (text) => ({type:ADD_TODO,payload:text})
const checkALL = (checked) => ({type:CHECK_ALL,payload:checked})
const clearDone = () => ({type:CLEAR_DONE})
const editText = (id,text) => ({ type: EDIT_TEXT, payload: {id,text} })
const changeStatus = (status) => ({ type: CHANGE_STATUS, payload: status })

/**
 * 异步删除全部列表
 * @returns 
 */
const clearAllSync = () => {
    return (dispatch,getState) => {
        setTimeout(() => { 
            dispatch(clearDone())
        },1000)    
    }
 }

export { 
    delTodo,
    toggleFn,
    addTodo,
    checkALL,
    clearDone,
    editText,
    changeStatus,
    clearAllSync
}