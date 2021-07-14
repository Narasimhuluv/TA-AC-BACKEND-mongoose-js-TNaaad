//  Requirments
let express = require('express')
let logger = require('morgan')
let mongoose = require('mongoose')
let User = require('./models/user')

// intenstiatives

let app = express();
//Mongoose Connecting

mongoose.connect("mongodb://localhost/sample", { useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    console.log(err? err : "Connected to server")
})

// MiddileWares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))

// Routers 

app.get('/', (req,res) => {
    res.send(`<h2>Hi Welcome to Index page</h2>`)
})
app.post('/users', (req,res) => {
    // console.log(req.body)
    User.create(req.body, (err,User) => {
        console.log(err,User)
        res.json(User)
    })
})

app.get('/users', (req,res) => {
    User.find({}, (err, User) => {
        console.log(err, User)
        res.json(User)
    })
})

app.get('/users/:id' , (req,res) => {
    let id = req.params.id
    User.findById(id,(err,Users) => {
        console.log(err)
        res.json(Users)
    })
})

app.get('/users/each', (req,res) => {
    User.findOne({"name" : "Chinna"}, (err,Users) => {
        console.log(err)
        res.json({Users : Users})
    })
})

app.put('/users/:id' , (req,res) => {
    let id = req.params.id
    User.findByIdAndUpdate(id,req.body,{new : true},(err,Userupdate) => {
        console.log(err)
        res.json(Userupdate)
    })
})

app.delete('/users/:id', (req,res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id,(err,deletedUser) => {
        console.log(err)
        res.send(`${deletedUser} was deleted`)
    })
})


app.listen(5000, () => {
    console.log('Server is running on port 5k')
})