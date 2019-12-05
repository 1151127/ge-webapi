var express = require('express');
var router = express.Router();

var tuController = require('../controller/tipoUtilizadorController');

// create a cliente (accessed at POST http://localhost:8080/api/utilizador)
router.post('/',tuController.saveTipoUtilizador);
router.get('/',tuController.getTipoUtilizador);
router.get('/:id',tuController.getTipoUtilizadorById);

module.exports = router;