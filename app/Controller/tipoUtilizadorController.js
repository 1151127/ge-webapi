const TipoUtilizadorService = require('../Service/tipoUtilizadorService');

exports.saveTipoUtilizador = async function (req, res) {
    TipoUtilizadorService.save(req,res);
};

exports.getTipoUtilizador = function (req, res) {
    TipoUtilizadorService.getAll(req,res);
};

exports.getTipoUtilizadorById = function (req, res) {
    TipoUtilizadorService.getById(req,res);
};

exports.getTipoUtilizadorByDesc = function (req, res) {
    TipoUtilizadorService.getByDesc(req,res);
};

exports.modifTipoUtilizadorByDesc = async function (req, res) {
    TipoUtilizadorService.modifByDesc(req,res);
};

exports.removeTipoUtilizadorById = async function (req, res) {
    TipoUtilizadorService.removeById(req,res);
};

exports.removeTipoUtilizadorByDesc = async function (req, res) {
    TipoUtilizadorService.removeByDesc(req,res);
};