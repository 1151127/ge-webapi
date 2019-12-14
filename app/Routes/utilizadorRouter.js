var express = require('express');
var router = express.Router();

var uController = require('../../app/Controller/utilizadorController');

// create a cliente (accessed at POST http://localhost:8080/api/utilizador)
router.get('/',uController.getUtilizador);
router.get('/:id',uController.getUtilizadorById);
router.get('/nome/:nome',uController.getUtilizadorByNome);
router.post('/',uController.saveUtilizador);
router.put('/',uController.modifUtilizador);
router.put('/nome/:nome',uController.modifUtilizadorByNome);
router.delete('/nome/:nome',uController.removeUtilizadorByNome);

module.exports = router;