let express = require('express')
let morgan = require('morgan')
let mongoose = require('mongoose')

// intestiatives 

let app = express();


// MiddleWares
mongoose.connect("mongodb://localhost/database2", (err) => {
    console.log(err ? err : "Connected to database")
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))

// Routers 

app.get('/', (req,res) => {
    res.send(`<h2>main page</h2>`)
})
app.get('/about', (req,res) => {
    res.send(`<h2>about page</h2>`)
})

// localhost server 

app.listen(5000, () => {
    console.log('server is running on port 5k')
})