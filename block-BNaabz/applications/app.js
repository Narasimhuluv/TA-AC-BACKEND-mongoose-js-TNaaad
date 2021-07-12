let express = require('express')
let mongoose = require('mongoose')

// initiatives 
let app = express();

mongoose.connect("mongodb://localhost/database1", 
{useNewUrlParser : true, useUnifiedTopology:true}, (err) => {
    console.log(err ? err : "Connected to Database")
})

app.listen(5000,() => {
    console.log('SErver is running on port 5k')
})