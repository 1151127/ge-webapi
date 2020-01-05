var assert = require('assert');
var estatistica = require('../../GEApi/app/Models/estatistica');


/**
 * Tests the user class.
 */
describe('Estatistica Class Tests', () => {

    let e1, e2, e3;
    /**
     * Creates an object in the test database.
    */
    it('creates objects', (done) => {
        e1 = new estatistica({ produtoId: 1, quantidade: 5, count: 0, produto: undefined});
        e2 = new estatistica({ produtoId: 2, quantidade: 6, count: 0, produto: undefined});
        e3 = new estatistica({ produtoId: 3, quantidade: 7, count: 0, produto: undefined});

        Promise.all([e1.save(), e2.save(), e3.save()])
            .then(() => done());

    });
    
    
    /**
     * Finds by id.
     */
    it('finds by id', (done) => {
        estatistica.findOne({ _id: e1._id })
            .then((estatistica) => {
                assert(estatistica.produtoId == e1.produtoId);
                done();
            })
            .catch((err) => { assert.fail(err); });
    });

    /**
     * Finds by productId.
     */
    it('finds by productId', (done) => {
        estatistica.findOne({ produtoId: e2.produtoId })
            .then((estatistica) => {
                assert(estatistica.produtoId == e2.produtoId);
                done();
            })
            .catch((err) => { assert.fail(err); });
    });


    /**
     * Finds all .
     */
    it('finds all', (done) => {
        estatistica.find()
            .then((estatisticas) => {
                assert(estatisticas.length == 3);
                done();
            })
            .catch((err) => { assert.fail(err); });
    });

    /**
     * Removes by id
     */
    it('removes by id', (done) => {
        estatistica.deleteOne({ _id: e3._id })
            .then(() => estatistica.findOne({ _id: e3._id }))
            .then((estatistica) => {
                assert(estatistica == null);
                done();
            })
            .catch((err) => { assert.fail(err); });
    });

    
});


