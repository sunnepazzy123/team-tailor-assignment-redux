import React, {useState} from 'react'
import {Row, Col, Form, Button} from "react-bootstrap"
import MovieCard from '../components/MovieCard'
import {searchMovieActions} from "../actions/movieActions"
import {useDispatch, useSelector} from "react-redux"
import Loader from '../components/Loader'


const AddScreen = () => {

    const [input, setInput] = useState("")

    const dispatch = useDispatch()

    //grab the state from the store
    const{ searchedMovie, loading, error, success }= useSelector(state => state.searchMovieList)

    const {results} = searchedMovie
    // console.log(searchedMovie)

    //submit form
    const submitHandler = (e)=>{
        e.preventDefault()
        if(input !== "" && input.length > 2){

         dispatch(searchMovieActions(input))
         setInput("")
        }


    }



    const addInput = (e)=>{
       e.preventDefault()
       setInput(e.target.value)
    }

    return (
        <>
        <Row>
            <Col>
                <h1>Search your movie</h1>
                <Form onSubmit={submitHandler}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    {/* <Form.Label>Enter your movie</Form.Label> */}
                    <Form.Control type="text"
                     placeholder="Enter your movies name here"
                     onChange={addInput}
                     value={input}
                      />
                      <Button type="submit" className="my-2">Search Movies</Button>
                </Form.Group>
                </Form>
            </Col>   
        </Row>

        {loading ? <Loader /> : error ? <h2>{error}</h2> : (

            <Row>
            {results && success && results.length == 0  ? <h2>No Result Found</h2> : results && (            
                results.map((movie)=> (
                        <Col md={3} key={movie.id}>
                        <MovieCard movie={movie} status={movie.status} />
                        </Col>
                    ))
            
            )}
            </Row>



        )}

   

        
        </>
    )
}

export default AddScreen


