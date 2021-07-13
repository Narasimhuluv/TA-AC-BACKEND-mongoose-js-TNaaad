let express = require('express');
let looger = require('morgan');
let mongoose = require('mongoose');
const { Router } = require('express');

mongoose.connect("mongodb://localhost/one",{ useNewUrlParser: true , useUnifiedTopology: true },(err) => {
    console.log(err ? err : "Connected to database")
})
let app = express();

// middleWares 
app.use(looger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))

// Routers 

app.get('/', (req,res) => {
    res.send('<h2>I am Narasimhulu</h2>')
})

app.get('/about', (req,res) => {
    res.send("<h2>I am about page</h2>")
})

// errors middlewares

app.use((req,res,next) => {
    res.send("Page is not found")
    next()
})

// custom error middlewares 

app.use((err,req,res,next) => {
    res.send(err)
})

app.listen(5000, () => {
    console.log('SErver is running on port 5k')
})


