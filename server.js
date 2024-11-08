import 'dotenv/config'
import express from 'express'
const app = express()
import mongoose from 'mongoose'
import cors from 'cors'

const PORT = process.env.PORT

import petRouter from './controllers/pets.js'

app.use(cors({ origin: 'http://localhost:5173' }))

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(express.json())

// Routes go here
app.use('/pets', petRouter)

app.listen(PORT, () => {
  console.log('The express app is ready!')
})
