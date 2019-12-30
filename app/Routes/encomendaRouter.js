var express = require('express');
var router = express.Router();
var cors = require('cors');

var eController = require('../../app/Controller/encomendaController');

var corsOptions = {
    origin: 'https://moc-app.herokuapp.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// create a cliente (accessed at POST http://localhost:8080/api/utilizador)
router.get('/',cors(corsOptions), eController.getEncomenda);
router.get('/:id',cors(corsOptions), eController.getEncomendaById);
router.get('/cliente/:cliente',cors(corsOptions), eController.getEncomendaFromClientById);
router.post('/',cors(corsOptions), eController.saveEncomenda);
router.put('/:id',cors(corsOptions), eController.modifEncomenda);
router.delete('/:id',cors(corsOptions), eController.cancelarEncomenda);

module.exports = router;