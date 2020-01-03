var express = require('express');
var router = express.Router();

var eController = require('../../app/Controller/encomendaController');

// create a cliente (accessed at POST http://localhost:8080/api/utilizador)
router.get('/',eController.getEncomenda);
router.get('/:id',eController.getEncomendaById);
router.get('/cliente/:cliente',eController.getEncomendaFromClientById);
router.post('/',eController.saveEncomenda);
router.put('/:id',eController.modifEncomenda);
router.delete('/:id',eController.cancelarEncomenda);
router.get('/registoEncomenda/',eController.getRegistoEncomenda);
router.get('/registoEncomenda/:id',eController.getRegistoEncomendaById);

module.exports = router;