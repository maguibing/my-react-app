import { useSelector } from "react-redux"

const Footer = () => { 
    const count = useSelector(state=>state.todos.filter(v=>!v.done).length)

    return (
        <footer className="footer">
        <span className="todo-count">
            <strong>{ count }</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
}

export default Footer