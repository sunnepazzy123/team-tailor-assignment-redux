import mongoose from 'mongoose'


const movieSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    poster_path: {
        type: String
    },
    status: {
        type: String
    }
  },
  {
    timestamps: true,
  }
)



const Movie = mongoose.model('Movie', movieSchema)

export default Movie
