import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true, useNewUrlParser: true,
        })
        console.log("mongodb is connected")
    } catch(error){
    console.log(error)
    process.exit()
    }
}

export default connectDB