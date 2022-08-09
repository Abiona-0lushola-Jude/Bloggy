const mongoose = require('mongoose')

const blogScheme = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String
    },
    markdown:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date,
    }
})

module.exports  = mongoose.model('Blog', blogScheme)