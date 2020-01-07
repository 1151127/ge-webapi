const Encomenda = require('../../app/Models/encomenda');
const Utilizador = require('../../app/Models/utilizador');
const UtilizadorDTO = require('../../app/DTO/utilizadorDTO');
const TipoUtilizador = require('../../app/Models/tipoUtilizador');

exports.getAll = async function (req, res) {
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

exports.getById = async function (req, res) {
    Utilizador.findById(req.params.id, async function (err, arr) {
        if (err)
            res.send(err);
        if (arr != null) {
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
        } else {
            res.send('Não existe!');
        }
    });
};

exports.getByNome = async function (req, res) {
    Utilizador.findOne({ nome: req.params.nome }, async function (err, arr) {
        if (err)
            res.send(err);
        if (arr != null) {
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
        } else {
            res.send('Não existe!');
        }
    });
};

exports.save = async function (req, res) {
    //Verificar se já existe

    var TUtilizador = await TipoUtilizador.findOne({ desc: req.body.tipoUtilizadorDesc});

    var auxN = await Utilizador.findOne({ nome: req.body.nome});
    var auxM = await Utilizador.findOne({ morada: req.body.morada, tipoUtilizador: TUtilizador});
    var auxE = await Utilizador.findOne({ email: req.body.email, tipoUtilizador: TUtilizador });

    if (auxN == null && auxM == null && auxE == null) {

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
        var taux = await TipoUtilizador.findOne({ desc: req.body.tipoUtilizadorDesc});
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
            res.send('Problema com o tipoUtilizador!');
        }
    } else {
        res.send('Já existe essa informação noutro utilizador!');
    }

};

exports.modifById = async function (req, res) {
    //Verificar se já existe
    var auxN = await Utilizador.findOne({ nome: req.body.nome });
    //var auxM = await Utilizador.findOne({ morada: req.body.morada });
    var auxE = await Utilizador.findOne({ email: req.body.email });

    if (auxN == null && auxE == null) {
        //Utilizador
        var utilizador = await Utilizador.findOne({ _id: req.body._id });
        if (utilizador != null) {
            utilizador.nome = req.body.nome;

            //Pass
            utilizador.pass = req.body.pass;

            //Morada
            utilizador.morada = req.body.morada;

            //Email
            utilizador.email = req.body.email;

            //TipoUtilizador
            var taux = await TipoUtilizador.findOne({ desc: req.body.tipoUtilizadorDesc });
            if (taux != null) {

                utilizador.tipoUtilizador = taux;
                // save the utilizador and check for errors
                utilizador.save(function (err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Utilizador Modificado!' });
                });
            } else {
                res.statusCode = 200;
                res.send('Problema com o tipoUtilizador!');
            }
        } else {
            res.send('Não existe Utilizador!');
        }

    } else {
        res.send('Já existe essa informação noutro utilizador!');
    }
};

exports.modifByNome = async function (req, res) {
    //Verificar se já existe
    //var auxN = await Utilizador.findOne({ nome: req.body.nome });
    //var auxM = await Utilizador.findOne({ morada: req.body.morada });
    //var auxE = await Utilizador.findOne({ email: req.body.email });
    //var utilizador = await Utilizador.findOne({ nome: req.params.nome });

    //if (auxN == null && auxE == null) {
        //Utilizador
        var utilizador = await Utilizador.findOne({ nome: req.params.nome });
        if (utilizador != null) {
            utilizador.nome = req.body.nome;

            //Pass
            utilizador.pass = req.body.pass;

            //Morada
            utilizador.morada = req.body.morada;

            //Email
            utilizador.email = req.body.email;

            //TipoUtilizador
            var taux = await TipoUtilizador.findOne({ desc: req.body.tipoUtilizadorDesc });
            if (taux != null) {

                utilizador.tipoUtilizador = taux;
                // save the utilizador and check for errors
                utilizador.save(function (err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Utilizador Modificado!' });
                });
            } else {
                res.statusCode = 200;
                res.send('Problema com o tipoUtilizador!');
            }

        } else {
            res.send('Não existe Utilizador!');
        }

    /*} else {
        res.send('Já existe essa informação noutro utilizador!');
    }*/
};

exports.removeByNome = async function (req, res) {
    var taux = await Utilizador.findOne({ nome: req.params.nome });
 
    var encomenda = await Encomenda.findOne({ cliente: taux._id });
    if ((encomenda == null) && (taux == null)) {
        Utilizador.deleteOne({ nome: req.params.nome }, function (err, arr) {
            if (err)
                res.send(err);
            res.json('Apagou com sucesso!');
        });
} else {
    res.send('O Utilizador ' + req.params.nome +' não pode ser eliminado pois tem encomendas no seu nome.');
}
};