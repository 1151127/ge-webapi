var express = require('express');
var router = express.Router();

var uController = require('../controller/utilizadorController');

// create a cliente (accessed at POST http://localhost:8080/api/utilizador)
router.get('/',uController.getUtilizador);
router.get('/:id',uController.getUtilizadorById);
router.post('/',uController.saveUtilizador);
router.put('/',uController.modifUtilizador);

module.exports = router;