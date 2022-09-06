import MainItem from './MainItem'


const Main = () => {
    return (
        <>
            <section className="main">
                <input id="toggle-all" className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    < MainItem></MainItem>
                    < MainItem></MainItem>
                </ul>
            </section>
        </>
    )
}

export default Main

