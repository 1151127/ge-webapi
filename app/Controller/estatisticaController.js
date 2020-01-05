const EstatisticaService = require('../../app/Service/estatisticaService');

exports.getEstatistica = function (req, res) {
    EstatisticaService.getAll(req,res);
};

exports.saveEstatistica = async function (req, res) {
    EstatisticaService.save(req,res);
};

exports.modifEstatistica = async function (req, res) {
    EstatisticaService.modif(req,res);
};
