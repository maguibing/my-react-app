import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/actions/todos'

const Header = () => {
	const textRef = useRef(null)
	const dispatch = useDispatch()
	const [text, setText] = useState('')
	const addTodos = e => {
		if (text.trim === '') return
		if (e.keyCode !== 13) return
		dispatch(addTodo(text))
		setText('')
	}

	return (
		<header className="header">
			<h1>todos</h1>
			<input ref={textRef} className="new-todo" value={text} onChange={e => setText(e.target.value)} onKeyDown={addTodos} placeholder="What needs to be done?" autoFocus />
		</header>
	)
}

export default Header
