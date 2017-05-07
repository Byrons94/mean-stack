'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/curso-mean', (err, rest) => {
	if(err){
		throw err;
	}
	else{
		console.log("Conexión a la bd correctanente");
		app.listen(port, function(){
			console.log("Servidor escuchando en http://localhost:" + port);
		});
	}
});