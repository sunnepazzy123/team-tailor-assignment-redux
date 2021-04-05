import express from 'express'
const router = express.Router()

import {addMovieToWatched, getMovie, getWatchedMovie, searchMovie} from "../controllers/movieController.js"




router.get("/", getMovie)

router.post("/", searchMovie)

router.get("/watched", getWatchedMovie)

router.post("/addWatched", addMovieToWatched )





export default router