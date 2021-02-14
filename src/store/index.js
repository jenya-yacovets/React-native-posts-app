import { createStore, combineReducers } from 'redux'

import postResucer from './reducers/post'

const rootReducer = combineReducers({
    post: postResucer
})

export default createStore(rootReducer)