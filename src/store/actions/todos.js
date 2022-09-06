import { DEL_TODO,TOGGLE_TODO,ADD_TODO,CHECK_ALL } from "./actionTypes";


const delTodo = (id) => ({ type: DEL_TODO, payload: id })
const toggleFn = (id) => ({type:TOGGLE_TODO,payload:id})
const addTodo = (text) => ({type:ADD_TODO,payload:text})
const checkALL = (checked) => ({type:CHECK_ALL,payload:checked})
export { 
    delTodo,
    toggleFn,
    addTodo,
    checkALL
}