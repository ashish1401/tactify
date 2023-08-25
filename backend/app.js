const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

const ocrRoute = require('/api/control/ocr.js');

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Fixed CORS-Cross Origin Resource Sharing errors 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, EmpId "
    );
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET ')
    }
    next();
})


app.use('/ocr', ocrRoute);

//Invalid enpoints
app.use(function (req, res, next) {
    const error = new Error('Not Found Anywhere'); //added message to error
    error.status = 404;
    next(error);
})

//Addressing unknown errors
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message //all automatically gen errors wil have an message 
        }
    })
})

//export the express middleware
module.exports = app;