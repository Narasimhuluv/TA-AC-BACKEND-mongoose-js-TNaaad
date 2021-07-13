let mongosose = require('mongoose')
let schema = mongosose.Schema;
 
let userSchema = new Schema({
    name : String,
    email : String,
    password : String
})
let User = mongosose.model("User", userSchema)
module.exports = User