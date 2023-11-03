const express = require('express')
// // const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyparser = require("body-parser")
const app = express()
const path = require('path')
// import db from './config/db.js';
const db = require('./config/db')

//log requests
app.use(morgan('tiny'))
// parse request to body-parser
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json())

app.listen(8800, ()=>{
    console.log("Connected to the server");
})

// import {route} from './Routes/Router.js';
var routes = require('./Routes/Router.js')
app.use('/', routes);






