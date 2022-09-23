import { createStore } from 'redux'

import rootRedeucer from './Reducers/index'

const store = createStore(rootRedeucer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store