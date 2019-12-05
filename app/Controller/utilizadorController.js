var Utilizador = require('../Models/utilizador');
var TipoUtilizador = require('../Models/tipoUtilizador');

exports.getUtilizador = function(req, res) {
    Utilizador.find(function (err, arr) {
        if (err)
          res.send(err);
        res.json(arr);
    });
};

exports.getUtilizadorById = function(req, res) {
    Utilizador.findById(req.params.id, function (err, arr) {
        if (err)
          res.send(err);
        res.json(arr);
    });
};

exports.saveUtilizador = async function (req, res) {

    //Utilizador
    var utilizador = new Utilizador();
    utilizador.nome = req.body.nome;

    //Pass
    utilizador.pass = req.body.pass;

    //Morada
    utilizador.morada = req.body.morada;

    //Email
    utilizador.email = req.body.email;

    //TipoUtilizador
    var taux = await TipoUtilizador.findOne({ desc: req.body.tipoUtilizador });
    if (taux != null) {
        
        utilizador.tipoUtilizador = taux._id;
        // save the utilizador and check for errors
        utilizador.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Utilizador created!' });
        });
    } else {
        res.statusCode = 200;
        res.send('Problema com o tipoUtilizador');
    }
};

exports.modifUtilizador = async function (req, res) {

    //Utilizador
    var utilizador = await Utilizador.findOne({ _id: req.body._id });
    utilizador.nome = req.body.nome;

    //Pass
    utilizador.pass = req.body.pass;

    //Morada
    utilizador.morada = req.body.morada;

    //Email
    utilizador.email = req.body.email;

    //TipoUtilizador
    var taux = await TipoUtilizador.findOne({ desc: req.body.tipoUtilizador });
    if (taux != null) {
        
        utilizador.tipoUtilizador = taux;
        // save the utilizador and check for errors
        utilizador.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Utilizador created!' });
        });
    } else {
        res.statusCode = 200;
        res.send('Problema com o tipoUtilizador');
    }
};