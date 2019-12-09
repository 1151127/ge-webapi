var Utilizador = require('../Models/utilizador');
var UtilizadorDTO = require('../DTO/utilizadorDTO');
var TipoUtilizador = require('../Models/tipoUtilizador');

exports.getUtilizador = async function (req, res) {
    Utilizador.find(async function (err, arr) {
        if (err)
            res.send(err);

        var i;
        var utilArray = [];
        var util;
        var taux;
        for (i = 0; i < arr.length; i++) {
            util = new UtilizadorDTO();
            util._id = arr[i]._id;
            util.nome = arr[i].nome;
            util.pass = arr[i].pass;
            util.email = arr[i].email;
            util.morada = arr[i].morada;
            taux = await TipoUtilizador.findOne({ _id: arr[i].tipoUtilizador });
            if (taux != null) {
                util.tipoUtilizadorId = taux.id;
                util.tipoUtilizadorDesc = taux.desc;
            }
            taux = null;
            utilArray.push(util);
        }
        res.json(utilArray);
    });
};

exports.getUtilizadorById = async function (req, res) {
    Utilizador.findById(req.params.id, async function (err, arr) {
        if (err)
            res.send(err);

        var util = new UtilizadorDTO();
        util._id = arr._id;
        util.nome = arr.nome;
        util.pass = arr.pass;
        util.email = arr.email;
        util.morada = arr.morada;
        var taux = await TipoUtilizador.findOne({ _id: arr.tipoUtilizador });
        util.tipoUtilizadorId = taux.id;
        util.tipoUtilizadorDesc = taux.desc;
        res.json(util);
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