const mongoose = require('mongoose')

const todoScheme = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date,
    }
})

module.exports = mongoose.model('Todo', todoScheme)