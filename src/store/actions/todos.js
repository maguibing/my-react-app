import { DEL_TODO,TOGGLE_TODO,ADD_TODO } from "./actionTypes";


const delTodo = (id) => ({ type: DEL_TODO, payload: id })
const toggleFn = (id) => ({type:TOGGLE_TODO,payload:id})
const addTodo = (text) => ({type:ADD_TODO,payload:text})
export { 
    delTodo,
    toggleFn,
    addTodo
}