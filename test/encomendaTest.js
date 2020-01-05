    /**
     * N_Encomenda: String,
    produtoId: Number,
    quantidade: Number,
    precoUnit: Number,
    dataCriacaoEncomenda: Date,
    dataEntregaEncomenda: Date,
    estadoBloqueado: Boolean,//Verifica se já está em produção(false = ainda não| true = em produção)
    estado: {
        type: String,
        enum: ['Aberta', 'Em Produção', 'Concluída', 'Em transito', 'Entregue', 'Cancelada']
      },
    estadoProducao: Boolean, //Verifica se já está em produção(false = ainda não| true = em produção)
    estadoFinalizado: Boolean, //Verifica se já está em finalizado(false = ainda não| true = finalizado)
    estadoEnviado: Boolean, //Verifica se já está em enviado(false = ainda não| true = enviado)
    precoTotal: Number,
    cliente: {type: Schema.Types.ObjectId, ref: 'Utilizador'}
    */

var assert = require('assert');
var encomenda = require('../../GEApi/app/Models/encomenda');


/**
 * Tests the class.
 */
describe('Encomenda Class Tests', () => {

    let e1, e2, e3;
    /**
     * Creates an object in the test database.
    */
    it('creates orders', (done) => {
        e1 = new encomenda({ N_Encomenda: 'qwerty', produtoId: 1, quantidade: 2, precoUnit: 5, dataCriacaoEncomenda: new Date(), dataEntregaEncomenda: undefined,
        estadoBloqueado: true, estado: undefined, estadoProducao: false, estadoFinalizado: false, estadoEnviado:false , precoTotal: 10, cliente:undefined });
        e2 = new encomenda({ N_Encomenda: 'qwerty2', produtoId: 1, quantidade: 2, precoUnit: 5, dataCriacaoEncomenda: new Date(), dataEntregaEncomenda: undefined,
        estadoBloqueado: true, estado: undefined, estadoProducao: false, estadoFinalizado: false, estadoEnviado:false , precoTotal: 10, cliente:undefined });
        e3 = new encomenda({ N_Encomenda: 'qwerty3', produtoId: 1, quantidade: 2, precoUnit: 5, dataCriacaoEncomenda: new Date(), dataEntregaEncomenda: undefined,
        estadoBloqueado: true, estado: undefined, estadoProducao: false, estadoFinalizado: false, estadoEnviado:false , precoTotal: 10, cliente:undefined });

        Promise.all([e1.save(), e2.save(), e3.save()])
            .then(() => done());

    });
    
    
    /**
     * Finds by id.
     */
    it('finds by id', (done) => {
        encomenda.findOne({ _id: e1._id })
            .then((encomenda) => {
                assert(encomenda.N_Encomenda == e1.N_Encomenda);
                done();
            })
            .catch((err) => { assert.fail(err); });
    });

    /**
     * Finds by productId.
     */
    it('finds by numero encomenda', (done) => {
        encomenda.findOne({ N_Encomenda: e2.N_Encomenda })
            .then((encomenda) => {
                assert(encomenda.N_Encomenda == e2.N_Encomenda);
                done();
            })
            .catch((err) => { assert.fail(err); });
    });


    /**
     * Finds all .
     */
    it('finds all', (done) => {
        encomenda.find()
            .then((encomendas) => {
                assert(encomendas.length == 3);
                done();
            })
            .catch((err) => { assert.fail(err); });
    });

    /**
     * Removes by id
     */
    it('removes by id', (done) => {
        encomenda.deleteOne({ _id: e3._id })
            .then(() => encomenda.findOne({ _id: e3._id }))
            .then((encomenda) => {
                assert(encomenda == null);
                done();
            })
            .catch((err) => { assert.fail(err); });
    });

    
});


