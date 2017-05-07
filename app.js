'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//load routes
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//configure headers

//base routes

module.exports = app;
