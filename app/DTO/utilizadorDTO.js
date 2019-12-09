// app/models/utilizadorDTO.js
var TipoUtilizador = require('../Models/tipoUtilizador');

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UtilizadorDTOSchema   = new Schema({
    nome: String,
    pass: String,
    email: String,
    morada: String,
    tipoUtilizadorId : String,
    tipoUtilizadorDesc : String
});

module.exports = mongoose.model('UtilizadorDTO', UtilizadorDTOSchema);