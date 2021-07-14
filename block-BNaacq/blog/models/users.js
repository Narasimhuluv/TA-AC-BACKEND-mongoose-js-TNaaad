let mongoose = require('mongoose')
let schema = mongoose.Schema

let userSchema = new schema({
    name : String,
    email : String,
    age : Number
})

let User = mongoose.model("User", userSchema)
module.exports = User