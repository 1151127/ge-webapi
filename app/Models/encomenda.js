// app/models/encomenda.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EncomendaSchema = new Schema({
    produtoId: Number,
    quantidade: Number,
    dataCriacaoEncomenda: Date,
    dataEntregaEncomenda: Date,
    estadoProducao: Boolean, //Verifica se já está em produção(false = ainda não| true = em produção)
    estadoFinalizado: Boolean, //Verifica se já está em finalizado(false = ainda não| true = finalizado)
    estadoEnviado: Boolean, //Verifica se já está em enviado(false = ainda não| true = enviado)
    precoTotal: Number,
    cliente: {type: Schema.Types.ObjectId, ref: 'Utilizador'}
});

module.exports = mongoose.model('Encomenda', EncomendaSchema);