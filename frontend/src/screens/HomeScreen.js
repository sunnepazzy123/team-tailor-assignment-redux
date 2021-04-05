import React, { useEffect} from 'react'
import {Row, Col,} from "react-bootstrap"
import Loader from "../components/Loader"
import MovieCard from "../components/MovieCard"
import {useDispatch, useSelector} from "react-redux"
import {movieListActions} from "../actions/movieActions"

const HomeScreen = () => {
    //set dispatch
    const dispatch = useDispatch()
    //Grab a piece of state from the store
    const {movies, loading, error} = useSelector(state => state.movieList)

    
    useEffect(()=>{
        //Call dispatch
        dispatch(movieListActions()) 

    }, [dispatch])

    return (
        <>
        <h1>Popular Movies</h1>
        {loading ? <Loader /> : error ? <h3>{error}</h3> : (

            <Row>         
            {movies.results && movies.results.map(movie=> (
            <Col sm={12} md={6} lg={4} xl={3} key={movie.id} >
                <MovieCard movie={movie}  />
            </Col>
             ))

            }

            </Row>


        )}

        </>
    )
}

export default HomeScreen
