let mongoose = require('mongoose')
let schema = mongoose.Schema

let UserArticle = new Schema({
    title : String,
    description : String,
    tags : [String],
    createdAt : {type : Date, default : new Date},
    likes : {type : Number , default : 0}
}, timestamps : true)

let Article = mongoose.model('Article', UserArticle);
module.exports = Article;