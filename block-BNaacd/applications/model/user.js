let mongoose = require('mongoose')
let schema = mongoose.Schema

let userSchema = new Schema({
    name : String,
    age : Number,
    email : String
})

let userSchema1 = new Schema({
    email : {type: String, lowercase : true},
    age : {type : Number, default : 0}
})