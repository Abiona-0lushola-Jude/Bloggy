const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 5001

// MiddleWare
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

// Middleware for our router 
app.use('/', require('./Router/routes'))
// Connecting to database


// Connecting t0 PORT
app.listen(PORT, ()=> console.log(`The Server is now Running at Port ${PORT}`))