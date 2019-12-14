var express = require('express');
var router = express.Router();

var tuController = require('../../app/Controller/tipoUtilizadorController');

// create a cliente (accessed at POST http://localhost:8080/api/utilizador)
router.post('/',tuController.saveTipoUtilizador);
router.get('/',tuController.getTipoUtilizador);
router.get('/id/:id',tuController.getTipoUtilizadorById);
router.get('/desc/:desc',tuController.getTipoUtilizadorByDesc);
router.put('/desc/:desc',tuController.modifTipoUtilizadorByDesc);
router.delete('/id/:id',tuController.removeTipoUtilizadorById);
router.delete('/desc/:desc',tuController.removeTipoUtilizadorByDesc);

module.exports = router;