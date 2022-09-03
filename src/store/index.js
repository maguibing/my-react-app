import {createStore} from 'redux'

import Reducer from './reducers'

export default  createStore(Reducer)

// store.dispatch({ type: 'increment', payload: 1 })
 