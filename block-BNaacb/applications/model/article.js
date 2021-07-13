let mongoose = require('mongoose')

let schema = mongoose.Schema

let userSchema = new Schema({
    name : String,
    age : Number,
    email : String
})