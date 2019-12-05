var express = require('express');
var router = express.Router();

var eController = require('../../app/Controller/encomendaController');

// create a cliente (accessed at POST http://localhost:8080/api/utilizador)
router.get('/',eController.getEncomenda);
router.get('/:id',eController.getEncomendaById);
router.post('/',eController.saveEncomenda);
router.put('/',eController.modifEncomenda);
router.delete('/',eController.cancelarEncomenda);

module.exports = router;