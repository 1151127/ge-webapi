// app/models/encomenda.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EncomendaSchema = new Schema({
    produtoId: Number,
    quantidade: Number,
    dataCriacaoEncomenda: Date,
    dataEntregaEncomenda: Date,
    estadoBloqueado: Boolean,//Verifica se já está em produção(false = ainda não| true = em produção)
    precoTotal: Number,
    cliente: {type: Schema.Types.ObjectId, ref: 'Utilizador'}
});

module.exports = mongoose.model('Encomenda', EncomendaSchema);