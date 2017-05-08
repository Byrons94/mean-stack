'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//load routes
var user_routes = require('./routes/userRoute');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//configure headers
app.use('/api', user_routes);


//base routes
module.exports = app;