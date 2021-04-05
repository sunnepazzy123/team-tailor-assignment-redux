import {createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {movieListReducer, addMovieReducer, searchMovieReducer, watchedMovieReducer} from "../reducers/movieReducer"


const reducer = combineReducers({
    movieList: movieListReducer,
    addMovie: addMovieReducer,
    searchMovieList: searchMovieReducer,
    watchedMovieList: watchedMovieReducer,
})

const initialState = {
    watchedList: [],
    watched:  [],

}

const middleWare = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))

export default store