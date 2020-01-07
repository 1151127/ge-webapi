const estatistica = require('../../app/Models/estatistica');
const produto = require('../../app/Models/produto');
const request = require('request');
const urlMDP = 'https://mdpapi.azurewebsites.net/api/produto/';

async function getProduto(url) {
    return new Promise((resolve, reject) => {
        request({ url, method: 'GET' }, (error, response, body) => {
            if (error) return reject(error)

            return resolve({ body, response })
        })
    })
}

exports.getAll = function (req, res) {
    estatistica.find(function (err, arr) {
        if (err)
            res.send(err);
        res.json(arr);
    });
};

exports.save = async function (req, res) {
    let { response, body } = await getProduto(urlMDP + req.body.produtoID);

    if (response.statusCode !== 200) {
        res.statusCode = 400;
        res.send('Não existe esse Produto!');
    } else {
        //produto
        var Estatistica = new estatistica();
        var Produto =  new produto();
        Produto = JSON.parse(response.body)
        Estatistica.produto = Produto;


        Estatistica.produtoId = req.body.produtoID;
        //quantidade
        Estatistica.quantidade = req.body.quantidade;
        Estatistica.count = 0;

        Estatistica.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Estatistica Criada!' });
        });
    }
};

exports.modif = async function (req, res) {

    //var Estatistica = await estatistica.findOne({ _id: req.params.id });
    var Estatistica = await estatistica.findOne({ produtoId: req.params.id });

    if (Estatistica != null) {

            //quantidade
            Estatistica.quantidade = Estatistica.quantidade + req.body.quantidade;

            Estatistica.count = Estatistica.count + 1;
            Estatistica.save(function (err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Estatistica Modificada!' });
                
            });

    }
};
