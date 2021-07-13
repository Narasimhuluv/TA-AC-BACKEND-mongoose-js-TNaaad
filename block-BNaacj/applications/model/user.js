let mongoose = require('mongoose')
let shecma = mongoose.Schema

let userSchema = new Schema({
    name : {type : String, required : true},
    age : {type : Number , default : 18},
    password : {stype : String , minlength : 5, maxlength : 15},
    data : {type : Date , default : currentDate}
})
