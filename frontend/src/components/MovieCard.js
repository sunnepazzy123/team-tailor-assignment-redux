import React from 'react'
import {Card, Button} from "react-bootstrap"
import {addWatchedMovieActions} from "../actions/movieActions"
import {useDispatch,} from "react-redux"


const MovieCard = ({movie, status}) => {

    const {poster_path,  } = movie

    const disableBtn = status === "watched" ? true : false


    const dispatch = useDispatch()
 
    // default image when image is null
    const defaultImg = "https://media-exp1.licdn.com/dms/image/C560BAQEIdrUG5q1jiQ/company-logo_200_200/0/1541688426374?e=2159024400&v=beta&t=PGCkXnqEjulMXpOpxHsbVdVSXBHeSMa9RKk5gNeOK-E"


    const addWatchedHandler = (movie)=>{

          
        dispatch(addWatchedMovieActions(movie))

     
    }





    return (
  
            <Card  className="py-3 my-3 rounded">
            <Card.Img variant="top"
             src={poster_path == null ? defaultImg : `https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
             alt={movie.poster_path} variant="top" 
             height="200px" />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.overview.substring(0, 50)}...
                </Card.Text>
                <Button variant="primary" disabled={disableBtn} onClick={()=>addWatchedHandler(movie)}>Add Watched</Button>     
            </Card.Body>
            </Card> 
      
    )
}

export default MovieCard
