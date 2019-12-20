const Encomenda = require('../Models/encomenda');
const Utilizador = require('../Models/utilizador');
const request = require('request');
const urlMDP = 'https://mdpapi.azurewebsites.net/api/produto/';

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

exports.getEncomendaFromClientById = function (req, res) {
    Encomenda.find({ cliente: req.params.cliente }, function (err, arr) {
        if (err)
            res.send(err);
        res.json(arr);
    });
};

async function getProduto(url) {
    return new Promise((resolve, reject) => {
        request({ url, method: 'GET' }, (error, response, body) => {
            if (error) return reject(error)

            return resolve({ body, response })
        })
    })
}

exports.saveEncomenda = async function (req, res) {

    let { response, body } = await getProduto(urlMDP + req.body.produtoId);

    if (response.statusCode !== 200) {
        res.statusCode = 400;
        res.send('Não existe esse Produto!');
    } else {
        //produto
        var encomenda = new Encomenda();
        encomenda.produtoId = req.body.produtoId;

        //quantidade
        encomenda.quantidade = req.body.quantidade;

        //data
        encomenda.dataCriacaoEncomenda = new Date(req.body.dataCriacaoEncomenda);
        if (req.body.dataEntregaEncomenda != null) {
            encomenda.dataEntregaEncomenda = new Date(req.body.dataEntregaEncomenda);
        } else {
            encomenda.dataEntregaEncomenda = null;
        }

        //estado
        encomenda.estadoBloqueado = false;

        //preço
        encomenda.precoTotal = req.body.precoTotal;

        //TipoUtilizador
        var utilizador = await Utilizador.findOne({ _id: req.body.cliente });
        if (utilizador != null) {

            encomenda.cliente = utilizador._id;
            // save the utilizador and check for errors
            encomenda.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Encomenda Criada!' });
            });
        } else {
            res.statusCode = 400;
            res.send('Problema com o Utilizador!');
        }
    }
};

exports.modifEncomenda = async function (req, res) {

    //Utilizador
    //produto
    var encomenda = await Encomenda.findOne({ _id: req.body._id });
    if (encomenda != null && encomenda.estadoBloqueado == false) {

        let { response, body } = await getProduto(urlMDP + req.body.produtoId);
        if (response.statusCode !== 200) {
            res.statusCode = 400;
            res.send('Não existe esse Produto!');
        } else {
            encomenda.produtoId = req.body.produtoId;

            //quantidade
            encomenda.quantidade = req.body.quantidade;

            //data
            encomenda.dataCriacaoEncomenda = new Date(req.body.dataCriacaoEncomenda);
            if (req.body.dataEntregaEncomenda != null) {
                encomenda.dataEntregaEncomenda = new Date(req.body.dataEntregaEncomenda);
            } else {
                encomenda.dataEntregaEncomenda = null;
            }

            //estado
            encomenda.estadoBloqueado = req.body.estadoBloqueado;

            //preço
            encomenda.precoTotal = req.body.precoTotal;

            //utilizador
            var utilizador = await Utilizador.findOne({ _id: req.body.cliente });
            if (utilizador != null) {

                encomenda.cliente = utilizador;
                // save the utilizador and check for errors
                encomenda.save(function (err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Encomenda Modificado!' });
                });
            } else {
                res.statusCode = 400;
                res.send('Problema com o Utilizador!');
            }
        }
    } else {
        res.statusCode = 400;
        res.send('Não existe encomenda ou já esta em produção!');
    }
};

exports.cancelarEncomenda = async function (req, res) {

    //Utilizador
    //produto
    var encomenda = await Encomenda.findOne({ _id: req.body._id });
    if (encomenda != null && encomenda.estadoBloqueado == false) {
        encomenda.remove(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Encomenda Cancelada!' });
        });
    }
    else {
        res.statusCode = 400;
        res.send('Não existe encomenda ou já esta em produção!');
    }
};