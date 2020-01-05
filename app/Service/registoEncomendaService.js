const RegistoEncomenda = require('../../app/Models/registoEncomenda');

exports.getAll = function (req, res) {
    RegistoEncomenda.find(function (err, arr) {
        if (err)
            res.send(err);
        res.json(arr);
    });
};

exports.getById = function (req, res) {
    RegistoEncomenda.find({ encomenda: req.params.id }, function (err, arr) {
        if (err)
            res.send(err);
        res.json(arr);
    });
};