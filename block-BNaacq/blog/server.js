// Requirements
let express = require('express')
let logger = require('morgan')
let mongoose = require('mongoose');
let Article = require('./models/articles')
let User = require('./models/users')

// initialisation
let app = express();

// 
// connected to database

mongoose.connect("mongodb://localhost/blog", { useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    console.log(err ? err : "Database is connected")
})

// middleWares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))

// Routers 
app.get('/', (req,res) => {
    res.send(`<h2>Welcome to home Page</h2>`)
})

app.post('/articles', (req,res) => {
    Article.create(req.body, (err,article) => {
        console.log(err,article)
        res.json(article)
    })
})

app.get('/articles', (req,res) => {
    Article.find({}, (err,article) => {
        console.log(err,article)
        res.json(article)
    })
})

app.post('/user', (req,res) => {
    // console.log(req.body)
    User.create(req.body,(err,users) => {
        console.log(err,users)
        res.json(users)
    })
})

app.get('/user', (req,res) => {
    User.find({}, (err,users) => {
        console.log(err,users)
        res.json({users : users})
    })
})

app.listen(5000, () => {
    console.log('Server is running on port 5k')
})