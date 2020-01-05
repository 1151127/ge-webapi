// app/models/produto.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var produtoSchema = new Schema({
    produtoId: Number,
    name: String,
    tipoProduto: String,
    categoria: String,
    preco: Number,
    planoFabricoId: Number,
});

module.exports = mongoose.model('produto', produtoSchema);