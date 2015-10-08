/*

Editado por Carlos Nicolau Galves, nicolaugalves@livetouch.com.br

Use, mas mantenha o bom senso, compartilhe e mantenha os direitos do autor.

*/

var app = require('./app_config.js');
var carro = require('./controller/carrosController.js');
var validator = require('validator');

app.get('/', function(req, res){

	res.end('Servidor online');
	console.log("Servidor Online!");

});


app.get('/carro', function(req, res){

	carro.list(function(resp) { 
		res.json(resp);
	});

	console.log("Fazendo GET!");
});

app.get('/carro/:id', function(req, res){
		
	id = validator.trim(validator.escape(req.param('id')));

	carro.findCarro(id, function(resp) {
		res.json(resp);
	});

	console.log("Fazendo GET! por Id!");
});

app.post('/carro', function(req, res){
	
	var tipo = validator.trim(validator.escape(req.param('tipo')));
	var nome = validator.trim(validator.escape(req.param('nome')));
	var desc = validator.trim(validator.escape(req.param('desc')));
	var urlFoto = validator.trim(validator.escape(req.param('urlFoto')));
	var urlVideo = validator.trim(validator.escape(req.param('urlVideo')));
	var latitude = validator.trim(validator.escape(req.param('latitude')));
	var longitude = validator.trim(validator.escape(req.param('longitude')));


	carro.save(tipo, nome, desc, urlFoto, urlVideo, latitude, longitude, function(resp) {
		res.json(resp);
	});

	console.log("Salvando Dados! POST");
});

app.put('/carro', function(req, res){
	
	var id = validator.trim(validator.escape(req.param('id')));
	var tipo = validator.trim(validator.escape(req.param('tipo')));
	var nome = validator.trim(validator.escape(req.param('nome')));
	var desc = validator.trim(validator.escape(req.param('desc')));
	var urlFoto = validator.trim(validator.escape(req.param('urlFoto')));
	var urlVideo = validator.trim(validator.escape(req.param('urlVideo')));
	var latitude = validator.trim(validator.escape(req.param('latitude')));
	var longitude = validator.trim(validator.escape(req.param('longitude')));

	carro.update(id, tipo, nome, desc, urlFoto, urlVideo, latitude, longitude, function(resp) {
		res.json(resp);
	});

	console.log("Atualizando dados por PUT!");
});

app.delete('/carro/:id', function(req, res){
	
	id = validator.trim(validator.escape(req.param('id')));

	carro.delete(id, function(resp) {
		res.json(resp);
	});
	console.log("Deletando Dados por DELETE!");
});