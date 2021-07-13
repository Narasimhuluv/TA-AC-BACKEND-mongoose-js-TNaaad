let mongoose = require('mongoose')
let schema = mongoose.Schema;

let userSchema = new Schema({
    name : String,
    email : {type : String, lowercase: true},
    age : {type : Number, default  : 0},
    password : {type : String, minlength : 5,},
    date : {type : Date, default : new Date}
})

let UserArticle = mongoose.model("User", userSchema)
module.exports = UserArticle; 