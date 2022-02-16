
const express = require('express')
const app = express()
const mongoose = require("mongoose");
const mongoUrl = "mongodb+srv://salimamara:22814611@cluster0.ihnet.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//parse the data 
app.use(express.json());

//
app.use('/persons', require('./routes/personRoutes'));


// connect the data with server
mongoose.connect(
    "mongodb+srv://salimamara:22814611@cluster0.ihnet.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    err => {
        if (err) throw err;
        console.error("Database connected");
    }
);


const port = 5000
app.listen(port, (err) => {

    err ? console.log(err) : console.log(`The server is running, please open your browser at http://localhost:${port}`)
})