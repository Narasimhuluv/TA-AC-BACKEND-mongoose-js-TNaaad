let mongoose = require('mongoose')
let schema = mongoose.Schema

let userSchema = new Schema({
    village : String,
    city : String,
    state : String,
    pin :  Number,
    user : Schema.Types.objectId
})