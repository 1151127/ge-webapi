// app/models/encomenda.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EncomendaSchema = new Schema({
    N_Encomenda: String,
    produtoId: Number,
    quantidade: Number,
    precoUnit: Number,
    dataCriacaoEncomenda: Date,
    dataEntregaEncomenda: Date,
    estadoBloqueado: Boolean,//Verifica se já está em produção(false = ainda não| true = em produção)
    estado: {
        type: String,
        enum: ['Aberta', 'Em Produção', 'Concluída', 'Em transito', 'Entregue', 'Cancelada']
      },
    estadoProducao: Boolean, //Verifica se já está em produção(false = ainda não| true = em produção)
    estadoFinalizado: Boolean, //Verifica se já está em finalizado(false = ainda não| true = finalizado)
    estadoEnviado: Boolean, //Verifica se já está em enviado(false = ainda não| true = enviado)
    precoTotal: Number,
    cliente: {type: Schema.Types.ObjectId, ref: 'Utilizador'}
});

module.exports = mongoose.model('Encomenda', EncomendaSchema);