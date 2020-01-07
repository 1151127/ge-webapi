// app/models/utilizador.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UtilizadorSchema   = new Schema({
    nome: String,
    pass: String,
    email: String,
    morada: String,
    tipoUtilizador : {type: Schema.Types.ObjectId, ref: 'tipoUtilizador'}

    
});

module.exports = mongoose.model('Utilizador', UtilizadorSchema);