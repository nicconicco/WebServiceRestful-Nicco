var db_string = 'localhost:27017/data/carro';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

db.once('open', function() {
	var carroSchema = mongoose.Schema({
		tipo: String,
		nome: String,
		desc: String,
		urlFoto: String,
		urlVideo: String,
		latitude: String,
		longitude: String,
		created_at: Date
	});

	exports.carros = mongoose.model('carros', carroSchema);
});