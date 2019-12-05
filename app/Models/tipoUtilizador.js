// app/models/tipoUtilizador.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var tipoUtilizadorSchema   = new Schema({
    desc: String
});

module.exports = mongoose.model('tipoUtilizador', tipoUtilizadorSchema);