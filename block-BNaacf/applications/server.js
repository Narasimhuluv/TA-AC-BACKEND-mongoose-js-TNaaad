let express = require('express')
let logger = require('morgan')
let mongoose = require('mongoose');

// intensiatives

let app = express();

// Mongoose schema 
mongoose.connect("mongodb://localhost/databse2", (err) => {
    console.log(err ? err : "connected to database")
})


//  middleWares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))

// Routers 

app.get('/', (req,res) => {
    res.send("<h2> Index page </h2>")
})

app.get('/about', (req,res) => {
    res.send("<h2> about page </h2>")
})

// error middlwares

app.use((req,res,next) => {
    res.send("404 Page is not found")
})

app.listen(5000, () => {
    console.log("Server is running on port 5k")
})