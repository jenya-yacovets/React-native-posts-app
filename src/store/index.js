import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import postResucer from './reducers/post'

const rootReducer = combineReducers({
    post: postResucer
})

export default createStore(rootReducer, applyMiddleware(ReduxThunk))