import { useDispatch } from "react-redux"
import classNames from "classnames"
import { useState, useRef, useEffect } from 'react'
import { delTodo,toggleFn,editText } from "../store/actions/todos"

const MainItem = ({ id, text, done }) => { 
    
    const [isEdit, setIsEdit] = useState(false)
    const [todoName, setTodoName] = useState("")
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const onUpdateTodo = (e) => {
        if(e.keyCode!==13) return
        if(todoName.trim()==='') return
        dispatch(editText(id,todoName.trim()))
        setIsEdit(false)
     }

    const onBlurFn = () => { 
        setIsEdit(false)
        if(todoName.trim()==='') return
        dispatch(editText(id,todoName.trim()))
    }

    const onDoubleFn = () => { 
        setTodoName(text)
        setIsEdit(true)
    }

    
    useEffect(() => {
        inputRef.current.focus()
    },[isEdit])

    return (
        <li className={classNames({ completed: done, editing: isEdit })}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={done} onChange={() => dispatch(toggleFn(id))} />
                <label onDoubleClick={onDoubleFn}>{ text }</label>
                <button className="destroy" onClick={() => dispatch(delTodo(id))}></button>
            </div>

            <input className="edit" ref={inputRef} onBlur={onBlurFn} value={todoName} onKeyDown={onUpdateTodo}  onChange={ (e)=> setTodoName(e.target.value) } />
        </li>
    )
}

export default MainItem