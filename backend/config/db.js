import mongoose from "mongoose"

const connectDB = async () => {
    try {
        //connect to the mongoose database
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      })
  
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
      console.error(`Error: ${error.message}`.red.underline.bold)
      process.exit(1)
    }
  }
  
  export default connectDB