let mongoose = require('mongoose')
let schema = mongoose.Schema;

let addressSchema = new Schema({
    village : String,
    City : {type : String , required : true},
    state : {type : String , required : true},
    pin : Number,
    user : Schema.Types.ObjectId,
    favorite : [String]
},{timestamps : true})

let AddressArticle = mongoose.model("Address", addressSchema)
module.exports = AddressArticle; 