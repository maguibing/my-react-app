import classNames from 'classnames'
import { useSelector, useDispatch } from "react-redux"
import { clearDone,changeStatus } from '../store/actions/todos'

const Footer = () => { 
    const count = useSelector(state=>state.todos.filter(v=>!v.done).length)
    const filter = useSelector(state=>state.filters)
    const dispatch = useDispatch()
    return (
        <footer className="footer">
        <span className="todo-count">
            <strong>{ count }</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a className={classNames({ selected: filter === 'all' })} onClick={()=>dispatch(changeStatus('all'))} href="#/">All</a>
          </li>
          <li>
            <a className={classNames({selected:filter==='active'})} onClick={()=>dispatch(changeStatus('active'))} href="#/active">Active</a>
          </li>
          <li>
            <a className={classNames({selected:filter==='completed'})} onClick={()=>dispatch(changeStatus('completed'))} href="#/completed">Completed</a>
          </li>
        </ul>
            <button className="clear-completed" onClick={()=>dispatch(clearDone())}>Clear completed</button>
      </footer>
    )
}

export default Footer