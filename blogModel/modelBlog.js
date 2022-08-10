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
    img:{
        data: Buffer,
        contentType: String,
        default:"https://www.internationalmarbella.com/wp-content/uploads/2020/07/Blog-1280x721.jpg",
        type:String
    },
    createdAt:{
        type:Date,
        default:new Date,
    }
})

module.exports  = mongoose.model('Blog', blogScheme)