const UtilizadorService = require('../Service/utilizadorService');

exports.getUtilizador = async function (req, res) {
    UtilizadorService.getAll(req,res);
};

exports.getUtilizadorById = async function (req, res) {
    UtilizadorService.getById(req,res);
};

exports.getUtilizadorByNome = async function (req, res) {
    UtilizadorService.getByNome(req,res);
};

exports.saveUtilizador = async function (req, res) {
    UtilizadorService.save(req,res);
};

exports.modifUtilizador = async function (req, res) {
    UtilizadorService.modifById(req,res);
};

exports.modifUtilizadorByNome = async function (req, res) {

    UtilizadorService.modifByNome(req,res);
};

exports.removeUtilizadorByNome = async function (req, res) {
    UtilizadorService.removeByNome(req,res);
};