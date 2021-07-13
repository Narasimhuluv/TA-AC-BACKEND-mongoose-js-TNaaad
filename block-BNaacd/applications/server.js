let express = require('express')
let logger = require('morgan')
let mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/database2", { useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    console.log(err ? err :"Connected to Database")
})

// middleWares 

let app = express();
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))

app.use('/admin', (req,res,next) => {
    res.send('Access Deneid')
})
// routers

app.get('/', (req,res) => {
    res.send('<h2>Main Page</h2>')
})

app.get('/about', (req,res) => {
    res.send('<h2>about page</h2>')
})

// error middlwares

app.use((req,res,next) => {
    res.send("404 page is not found")
})
// custom error middlwares

app.use((err,req,res,next) => {
    res.send(err)
})

app.listen(5000, () => {
    console.log('Server is running on port 5k')
})