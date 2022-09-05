import MainItem from './MainItem'
import { useSelector } from 'react-redux'


const Main = () => { 
    const list = useSelector(state=>state.todos)
    return (
        <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {list.map(v => <MainItem key={v.id} {...v}></MainItem>) }
            </ul>
      </section>
    )
}

export default Main