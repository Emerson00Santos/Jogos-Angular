https://github.com/Emerson00Santos/Jogos-Angularconst { Double } = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fraseRegistroSchema = new Schema({
    titulo: String,
    descricao: String

}, {versionKey: false});

module.exports = mongoose.model("frase", fraseRegistroSchema);