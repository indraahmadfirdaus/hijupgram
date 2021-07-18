import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import unsplashReducer from './Unsplash/reducer'
import commentReducer from './Comments/reducer'
import likesReducer from './Likes/reducer'

const reducer = combineReducers({
    unsplash: unsplashReducer,
    comment: commentReducer,
    likes: likesReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store