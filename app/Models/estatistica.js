// app/models/estatistica.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var estatisticaSchema = new Schema({
    produtoId: {type: Number,unique: true},
    quantidade: Number,
    count: Number,
    produto: {type:Object, ref: 'Produto'}
});

module.exports = mongoose.model('estatistica', estatisticaSchema);