const EncomendaService = require('../Service/encomendaService');
const RegistoEncomendaService = require('../Service/registoEncomendaService');

exports.getEncomenda = function (req, res) {
    EncomendaService.getAll(req,res);
};

exports.getEncomendaById = function (req, res) {
    EncomendaService.getById(req,res);
};

exports.getEncomendaFromClientById = function (req, res) {
    EncomendaService.getFromClientById(req,res);
};

exports.saveEncomenda = async function (req, res) {
    EncomendaService.save(req,res);
};

exports.modifEncomenda = async function (req, res) {
    EncomendaService.modif(req,res);
};

exports.cancelarEncomenda = async function (req, res) {
    EncomendaService.cancelar(req,res);
};

exports.getRegistoEncomenda = function (req, res) {
    RegistoEncomendaService.getAll(req,res);
};

exports.getRegistoEncomendaById = function (req, res) {
    RegistoEncomendaService.getById(req,res);
};