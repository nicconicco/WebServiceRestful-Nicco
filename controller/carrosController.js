var db = require('../db_config.js');

exports.list = function(callback){

	db.programmer.find({}, function(error, carros) {

		if(error){
			callback({error: 'Não foi possivel listar os carros'});
		}else{
			callback(carros);
		}

	});

};

exports.findCarro = function(id, callback){
	db.programmer.findById(id, function(error, carro){

		if(error){
			callback({error: 'Não foi possivel encontrar o carro'});
		}else{
			callback(carro);
		}	

	});

};

exports.save = function(id, tipo, nome, desc, urlFoto, urlVideo, latitude, longitude, callback){

	new db.programmer({
		'tipo': tipo,
		'nome': nome,
		'desc': desc,
		'urlFoto': urlFoto,
		'urlVideo': urlVideo,
		'latitude': latitude,
		'longitude': longitude,
		created_at: new Date()

	}).save(function(error, carro) {
		if(error){
			callback({error: 'Não foi possivel salvar o carro'});
		}else{
			callback(carro);
		}
	});

};

exports.update = function(id, tipo, nome, desc, urlFoto, urlVideo, latitude, longitude, callback) {

	db.programmer.findById(id, function(error, carro){

		if(tipo) {
			carro.tipo = tipo;
		}

		if(nome) {
			carro.nome = nome;
		}

		if(desc) {
			carro.desc = desc;
		}

		if(urlFoto) {
			carro.urlFoto = urlFoto;
		}

		if(urlVideo) {
			carro.urlVideo = urlVideo;
		}

		if(latitude) {
			carro.latitude = latitude;
		}

		if(longitude) {
			carro.longitude = longitude;
		}

		carro.save(function(error, carro) {
			
			if(error){
				callback({error: 'Não foi possivel editar o carro'});
			}else{
				callback(carro);
			}

		});

	});
};

exports.delete = function(id, callback){

	db.programmer.findById(id, function(error, language){

		if(error){
			callback({error: 'Não foi possivel retornar a linguagem'});
		}else{
			language.remove(function(error) {
				if(!error) {
					callback({response: 'Linguagem deletada com sucesso'});
				}

			});
		}	

	});

}; 