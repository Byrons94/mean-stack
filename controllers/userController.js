'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');

function pruebas(req, res){
	res.status(200).send({
		message: "Probando una acción del controllador User"
	});
}

function saveUser(req, res){
	var user = new User();

	var params = req.body;
	console.log(params);
	//recibiendo parametros en "query" no en el body, revisar body-parser

	user.name = params.name;
	user.surname = params.surname;
	user.email = params.email;
	user.role = 'ROLE_USER';
	user.image = 'null';

	if(params.password){

	}else{
		res.status(500).send({message: "Introducir contraseña"});
	}
}


module.exports = {
	pruebas, 
	saveUser
};