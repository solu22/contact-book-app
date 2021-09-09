
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import userRouter from './routers/user.js'
import cors from 'cors'

const app = express()
dotenv.config()
connectDB()

app.use(express.json())

app.use(cors())

//Routes 
app.use(userRouter)


const PORT = process.env.PORT

app.listen(3001,()=>{
    console.log(`Server is listening at port ${PORT}`)
})