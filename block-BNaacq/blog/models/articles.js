let mongoose = require('mongoose')
let schema = mongoose.Schema

let articleSchema = new schema({
    title : String,
    description : String,
    tags : String,
    likes : String,
    author : String,
    comments : String,
}, {timestamps : true})

let Article = mongoose.model("Article", articleSchema)
module.exports = Article