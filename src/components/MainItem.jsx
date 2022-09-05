import { useDispatch } from "react-redux"
import { delTodo,toggleFn } from "../store/actions/todos"

const MainItem = ({ id,text,done}) => { 
    const dispatch = useDispatch()
    return (
        <li className={done?'completed':'' }>
        <div className="view">
                <input className="toggle" type="checkbox" checked={ done } onClick={()=>dispatch(toggleFn(id))}/>
                <label>{ text }</label>
          <button className="destroy" onClick={()=>dispatch(delTodo(id))}></button>
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
    )
}

export default MainItem