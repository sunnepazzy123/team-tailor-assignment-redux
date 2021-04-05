import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import colors from "colors"
import {notFound, errorHandler} from "./middlewares/errorMiddlewares.js"



//Initialize app
const app = express()

//Exec process 
dotenv.config()


//Exec Database
connectDB();

//Middleware 
app.use(express.json()) //Parse the body data





//Load the route
import movieRoute from "./routes/movieRoute.js"



//Use the Route
app.use("/api/movie", movieRoute )

// app.use(notFound)
app.use(errorHandler)






//Set Port
const PORT = process.env.PORT || 9000

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))