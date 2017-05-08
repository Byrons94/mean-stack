'use strict'

var express = require('express');
var UserController = require('../controllers/userController');

var api = express.Router();


api.get('/test-controller', UserController.pruebas);
api.post('/register', UserController.saveUser);

module.exports = api;