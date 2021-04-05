import {MOVIE_LIST_SUCCESS,
        MOVIE_LIST_REQUEST,
        MOVIE_LIST_FAIL,
        ADD_WATCHED_MOVIE_FAIL,
        ADD_WATCHED_MOVIE_SUCCESS,
        ADD_WATCHED_MOVIE_REQUEST,
        SEARCH_MOVIE_FAIL,
        SEARCH_MOVIE_REQUEST,
        SEARCH_MOVIE_SUCCESS,
        WATCHED_MOVIE_FAIL,
        WATCHED_MOVIE_REQUEST,
        WATCHED_MOVIE_SUCCESS,
    } from "../constants/movieConstants"


export const movieListReducer = (state = { movies: []}, action)=>{

    switch(action.type){
        case MOVIE_LIST_REQUEST:
            return {loading: true, movies: []}
        case MOVIE_LIST_SUCCESS:
            return {loading: false, movies: action.payload}
        case MOVIE_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }

}

export const addMovieReducer = (state = { movie: {} }, action)=>{
    switch(action.type){
        case ADD_WATCHED_MOVIE_REQUEST:
            return {loading: true, movie: {} }
        case ADD_WATCHED_MOVIE_SUCCESS:
            return {loading: false, movie: action.payload, success: true}
        case ADD_WATCHED_MOVIE_FAIL: 
            return {loading: false, error: action.payload}
        default:
            return state


    }
}

export const searchMovieReducer = (state = { searchedMovie: [] }, action)=>{
    switch(action.type){
        case SEARCH_MOVIE_REQUEST:
            return {loading: true, searchedMovie: [] }
        case SEARCH_MOVIE_SUCCESS:
            return {loading: false, searchedMovie: action.payload, success: true}
        case SEARCH_MOVIE_FAIL: 
            return {loading: false, error: action.payload}
        default:
            return state


    }
}


export const watchedMovieReducer = (state = { watchedMovie: [] }, action)=>{
    switch(action.type){
        case WATCHED_MOVIE_REQUEST:
            return {loading: true, watchedMovie: [] }
        case WATCHED_MOVIE_SUCCESS:
            return {loading: false, watchedMovie: action.payload, success: true}
        case WATCHED_MOVIE_FAIL: 
            return {loading: false, error: action.payload}
        default:
            return state
    }
}