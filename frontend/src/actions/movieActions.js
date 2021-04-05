import {MOVIE_LIST_SUCCESS,
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_FAIL,
    SEARCH_MOVIE_FAIL,
    SEARCH_MOVIE_SUCCESS,
    SEARCH_MOVIE_REQUEST,
    ADD_WATCHED_MOVIE_FAIL,
    ADD_WATCHED_MOVIE_REQUEST,
    ADD_WATCHED_MOVIE_SUCCESS,
    WATCHED_MOVIE_FAIL,
    WATCHED_MOVIE_REQUEST,
    WATCHED_MOVIE_SUCCESS,
} from "../constants/movieConstants"
import axios from "axios"


export const movieListActions = ()=> async(dispatch)=> {

    try {
        dispatch({type: MOVIE_LIST_REQUEST})

        const {data} = await axios.get("/api/movie")

        dispatch({
            type: MOVIE_LIST_SUCCESS,
            payload: data,       
        })
        
    } catch (error) {
        dispatch({type: MOVIE_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
        
    }

}

export const searchMovieActions = (search)=> async(dispatch)=> {

    try {
        dispatch({type: SEARCH_MOVIE_REQUEST})

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      
          const { data } = await axios.post('/api/movie', {search}, config )

        dispatch({
            type: SEARCH_MOVIE_SUCCESS,
            payload: data,       
        })
        
    } catch (error) {
        dispatch({type: SEARCH_MOVIE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
        
    }

}


export const addWatchedMovieActions = (movie)=> async(dispatch)=> {


    try {
        dispatch({type: ADD_WATCHED_MOVIE_REQUEST})

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      
          const { data } = await axios.post('/api/movie/addWatched', {movie}, config )

        dispatch({
            type: ADD_WATCHED_MOVIE_SUCCESS,
            payload: data,       
        })
        
    } catch (error) {
        dispatch({type: ADD_WATCHED_MOVIE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
        
    }

}


export const watchedMovieActions = ()=> async(dispatch)=> {

  

    try {
        dispatch({type: WATCHED_MOVIE_REQUEST})

        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      
          const { data } = await axios.get('/api/movie/watched', config )

        dispatch({
            type: WATCHED_MOVIE_SUCCESS,
            payload: data,       
        })
        
    } catch (error) {
        dispatch({type: WATCHED_MOVIE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message
        })
        
    }

}