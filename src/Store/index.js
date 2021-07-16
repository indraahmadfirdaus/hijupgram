import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import unsplashReducer from './Unsplash/reducer'
import commentReducer from './Comments/reducer'

const reducer = combineReducers({ unsplash: unsplashReducer, comment: commentReducer })

const store = createStore(reducer, applyMiddleware(thunk))

export default store