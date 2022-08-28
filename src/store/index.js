import createStore from 'redux'

import Reducer from './reducers'

const store = createStore(Reducer)

store.dispatch({ type: 'increment', payload: 1 })
