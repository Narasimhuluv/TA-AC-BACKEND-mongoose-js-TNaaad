let mongosose = require('mongoose')
let schema = mongosose.Schema;
 
let userSchema = new Schema({
    name : String,
    email : String,
    password : String
})

module.exports = mongosose.model("User", userSchema)