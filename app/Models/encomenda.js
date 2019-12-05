// app/models/encomenda.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EncomendaSchema = new Schema({
    produtoId: Number,
    quantidade: Number,
    cliente: {type: Schema.Types.ObjectId, ref: 'Utilizador'}
});

module.exports = mongoose.model('Encomenda', EncomendaSchema);