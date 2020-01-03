// app/models/registoEncomenda.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RegistoEncomendaSchema = new Schema({
    encomenda: String,
    dataRegisto: Date,
    produtoId: Number,
    quantidade: Number,
    dataCriacaoEncomenda: Date,
    dataEntregaEncomenda: Date,
    estadoProducao: Boolean, //Verifica se já está em produção(false = ainda não| true = em produção)
    estadoFinalizado: Boolean, //Verifica se já está finalizado(false = ainda não| true = finalizado)
    estadoEnviado: Boolean, //Verifica se já foi enviado(false = ainda não| true = enviado)
    precoTotal: Number,
    cliente: {type: Schema.Types.ObjectId, ref: 'Utilizador'},
    estadoEncomenda: Boolean //Ativo ou Cancelado
});

module.exports = mongoose.model('registoEncomenda', RegistoEncomendaSchema);