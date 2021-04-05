import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {watchedMovieActions} from "../actions/movieActions"
import MovieCard from "../components/MovieCard"
import {Row, Col} from "react-bootstrap"
import Loader from "../components/Loader"


const WatchedScreen = () => {

    const dispatch = useDispatch()

    const watchedMovieList = useSelector(state => state.watchedMovieList)

    const {loading, watchedMovie, error} = watchedMovieList

    useEffect(()=>{

        dispatch(watchedMovieActions())


    }, [dispatch])



    return (
        <>

<h1>Watched Movies</h1>
{loading ? <Loader /> : error ? <h3>{error}</h3> : (

        <Row>
            {watchedMovie.length === 0 ? <h2>Your Watched List is Empty</h2> : 

                 watchedMovie.map((movie)=> (
                    <Col sm={12} md={6} lg={4} xl={3}key={movie.id}>    
                        <MovieCard movie={movie} status={movie.status} />
                    </Col>

                ))
            
            }
        

        </Row>

    


)}

        </>



    )
}

export default WatchedScreen
