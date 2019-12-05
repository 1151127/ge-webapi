var TipoUtilizador = require('../Models/tipoUtilizador');

exports.saveTipoUtilizador = function(req, res) {

    var tipoUtilizador = new TipoUtilizador();
    tipoUtilizador.desc = req.body.desc;
    tipoUtilizador.save(function(err) {
        if (err)
        res.send(err);
        res.json({ message: 'TipoUtilizador created!' });
    });
};

exports.getTipoUtilizador = function(req, res) {
    TipoUtilizador.find(function (err, arr) {
        if (err)
          res.send(err);
        res.json(arr);
    });
};

exports.getTipoUtilizadorById = function(req, res) {
    TipoUtilizador.findById(req.params.id, function (err, arr) {
        if (err)
          res.send(err);
        res.json(arr);
    });
};