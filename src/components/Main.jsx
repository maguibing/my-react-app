import MainItem from './MainItem';
import { checkALL } from '../store/actions/todos';
import { useSelector, useDispatch } from 'react-redux';

const Main = () => {
	const filter = useSelector(state => state.filters);
	const list = useSelector(state => {
		if (filter === 'all') {
			return state.todos;
		} else if (filter === 'active') {
			return state.todos.filter(v => !v.done);
		} else {
			return state.todos.filter(v => v.done);
		}
	});
	const isAll = list.every(v => v.done);
	const dispatch = useDispatch();
	return (
		<section className="main">
			<input id="toggle-all" className="toggle-all" checked={isAll} onChange={e => dispatch(checkALL(e.target.checked))} type="checkbox" />
			<label htmlFor="toggle-all">Mark all as complete</label>
			<ul className="todo-list">
				{list.map(v => (
					<MainItem key={v.id} {...v}></MainItem>
				))}
			</ul>
		</section>
	);
};

export default Main;
