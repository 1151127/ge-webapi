var Encomenda = require('../Models/encomenda');
var Utilizador = require('../Models/utilizador');

exports.getEncomenda = function (req, res) {
    Encomenda.find(function (err, arr) {
        if (err)
            res.send(err);
        res.json(arr);
    });
};

exports.getEncomendaById = function (req, res) {
    Encomenda.findById(req.params.id, function (err, arr) {
        if (err)
            res.send(err);
        res.json(arr);
    });
};

exports.saveEncomenda = async function (req, res) {

    //produto
    var encomenda = new Encomenda();
    encomenda.produtoId = req.body.produtoId;

    //quantidade
    encomenda.quantidade = req.body.quantidade;

    //TipoUtilizador
    var utilizador = await Utilizador.findOne({ _id: req.body.cliente });
    if (utilizador != null) {

        encomenda.cliente = utilizador._id;
        // save the utilizador and check for errors
        encomenda.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Encomenda created!' });
        });
    } else {
        res.statusCode = 200;
        res.send('Problema com o Utilizador');
    }
};

exports.modifEncomenda = async function (req, res) {

    //Utilizador
    //produto
    var encomenda = await Encomenda.findOne({ _id: req.body._id });
    if (encomenda != null) {
        encomenda.produtoId = req.body.produtoId;

        //quantidade
        encomenda.quantidade = req.body.quantidade;

        //TipoUtilizador
        var utilizador = await Utilizador.findOne({ _id: req.body.cliente });
        if (utilizador != null) {

            encomenda.cliente = utilizador;
            // save the utilizador and check for errors
            encomenda.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Encomenda created!' });
            });
        } else {
            res.statusCode = 200;
            res.send('Problema com o Utilizador');
        }
    } else {
        res.statusCode = 200;
        res.send('Não existe encomenda');
    }
};

exports.cancelarEncomenda = async function (req, res) {

    //Utilizador
    //produto
    var encomenda = await Encomenda.findOne({ _id: req.body._id });
    if (encomenda != null) {
        encomenda.remove(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Encomenda Cancelada!' });
        });
    }
    else {
        res.statusCode = 200;
        res.send('Não existe encomenda');
    }
};