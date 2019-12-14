var TipoUtilizador = require('../Models/tipoUtilizador');

exports.saveTipoUtilizador = async function (req, res) {

    if (req.body.desc != null) {
        var taux = await TipoUtilizador.exists({ desc: req.body.desc });
        if (taux == false) {
            var tipoUtilizador = new TipoUtilizador();
            tipoUtilizador.desc = req.body.desc;
            tipoUtilizador.save(function (err) {
                if (err)
                    res.send(err);
                res.json({ message: 'TipoUtilizador criado!' });
            });
        } else {
            res.send('Já existe um tipo de utilizador com essa descrição!');
        }
    } else {
        res.send('Não existe o atributo Desc!');
    }
};

exports.getTipoUtilizador = function (req, res) {
    TipoUtilizador.find(function (err, arr) {
        if (err)
            res.send(err);
        res.json(arr);
    });
};

exports.getTipoUtilizadorById = function (req, res) {
    TipoUtilizador.findById(req.params.id, function (err, arr) {
        if (err)
            res.send(err);
        res.json(arr);
    });
};

exports.getTipoUtilizadorByDesc = function (req, res) {
    TipoUtilizador.findOne({ desc: req.params.desc }, function (err, arr) {
        if (err)
            res.send(err);
        if (arr != null) {
            res.json(arr);
        }else{
            res.send('Não existe!');
        }
    });
};

exports.modifTipoUtilizadorByDesc = async function (req, res) {

    //Utilizador
    var tipoUtilizador = await TipoUtilizador.findOne({ desc: req.params.desc });
    if (tipoUtilizador != null) {
        var taux = await TipoUtilizador.exists({ desc: req.body.desc });
        if (taux != true) {
            tipoUtilizador.desc = req.body.desc;
            tipoUtilizador.save(function (err) {
                if (err)
                    res.send(err);
                res.json({ message: 'TipoUtilizador Modificado!' });
            });
        } else {
            res.send('Já existe um tipoUtilizador com essa descrição!');
        }
    } else {
        res.send('Não existe tipoUtilizadores com essa descrição!');
    }
};

exports.removeTipoUtilizadorById = async function (req, res) {
    var taux = await TipoUtilizador.exists({ _id: req.params.id });
    if (taux == true) {
        TipoUtilizador.deleteOne({ _id: req.params.id }, function (err, arr) {
            if (err)
                res.send(err);
            res.json('Apagou com sucesso!');
        });
    } else {
        res.send('Não existe!');
    }
};

exports.removeTipoUtilizadorByDesc = async function (req, res) {
    var taux = await TipoUtilizador.exists({ desc: req.params.desc });
    if (taux == true) {
        TipoUtilizador.deleteOne({ desc: req.params.desc }, function (err, arr) {
            if (err)
                res.send(err);
            res.json('Apagou com sucesso!');
        });
    } else {
        res.send('Não existe!');
    }
};