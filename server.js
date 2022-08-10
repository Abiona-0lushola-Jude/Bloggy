const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 5001
require('dotenv').config()

// MiddleWare
app.use(express.json({limit: '25mb'}))
app.use(express.urlencoded({limit: '25mb',extended: false}))
app.use(cors())

// Middleware for our router 
app.use('/', require('./Router/routes'))
// Connecting to database
const todoConnection = process.env.TODO_URL
mongoose.connect(todoConnection,()=>{
    console.log("Connected to Database")
})





const blogConnection = process.env.BLOG_URL
mongoose.connect(blogConnection,()=>{
    console.log("Conncted to Database")
})

// Connecting t0 PORT
app.listen(PORT, ()=> console.log(`The Server is now Running at Port ${PORT}`))