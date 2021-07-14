let mongoose = require('mongoose')
let schema = mongoose.Schema
let userSchema = new mongoose.Schema({
    name : String,
    email : String,
    sports : [String]
},{timestamps : true})

let User = mongoose.model("User", userSchema);
module.exports = User;