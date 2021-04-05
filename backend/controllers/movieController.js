
import asyncHandler from 'express-async-handler'
import axios from "axios"
import Movie from "../model/MovieModel.js"


// @desc    Add Movie to Watched
// @route   GET /api/movie/add
// @access  Public
const addMovieToWatched = asyncHandler(async(req, res)=>{

    const {id, overview, title, poster_path, } = req.body.movie

    const newMovie = {id, overview, title, poster_path, status: "watched"}

    const findMovie = await Movie.find({id: newMovie.id})

    if(findMovie.length <= 0){
        const createdMovies = await Movie.create(newMovie)
        // console.log(createdMovies)
         if (createdMovies) {
            res.status(201).json(createdMovies)
        } else {
            res.status(400)
            throw new Error('Server Error')
        }

    }else{
     
        res.json({msg: "Movie alreadey added"})
    }



  
   


})



// @desc    Fetch Popular movie
// @route   GET /api/movie
// @access  Public
const getMovie = asyncHandler(async(req, res)=>{
    //fetching data using axios
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=35c3a336960bdcb8c04e0ae0c884bea9&language=en-US&page=1")
        .then(result => res.send(result.data))
        .catch(err => console.log(err))

})


// @desc    Get Watched Movie
// @route   POST /api/movie/watched
// @access  Public
const getWatchedMovie = asyncHandler(async(req, res)=>{

    const watchedMovie = await Movie.find({status: "watched"})
    // console.log(watchedMovie)
    if(watchedMovie){
        res.json(watchedMovie)
    }else{
        
        res.status(400)
        throw new Error("Error in query connection")
       
    }

    
})

// @desc    Search For movie
// @route   POST /api/movie
// @access  Public
const searchMovie = asyncHandler(async(req, res)=>{
   
    const {search} = req.body //request coming from the body
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=35c3a336960bdcb8c04e0ae0c884bea9&language=en-US&page=1&include_adult=false&query=${search}`)
    .then(result => res.send(result.data))
    .catch(err => console.log(err))


   
})



export {
    getMovie,
    getWatchedMovie,
    addMovieToWatched,
    searchMovie,
}