var express = require('express');
var router = express.Router();

var eController = require('../../app/Controller/estatisticaController');
router.get('/',eController.getEstatistica);
router.post('/',eController.saveEstatistica);
router.put('/:id',eController.modifEstatistica);

module.exports = router;