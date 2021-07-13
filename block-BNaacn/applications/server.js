let express = require('express')
let logger = require('morgan')
let mongoose = require('mongoose')
let app = express();

mongoose.connect("mongodb://localhost/database1", { useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    console.log(err ? err : "database is Connected")
})

// middlewares 
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))

// Routers 

app.get('/', (req,res) => {
    res.send(`<h2>html page</h2>`)
})

app.get('/about', (req,res) => {
    res.send(`<h2>about page</h2>`)
})

app.listen(5000, () => {
    console.log('Server is running on port 5k')
})