let express = require('express')
let logger = require('morgan')
let mongoose = require('mongoose')

let app = express();
mongoose.connect("mongdb://localhost/database1")

// middlerwares

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))


app.listen(5000, () => {
    console.log('Server is running on port 5k')
})