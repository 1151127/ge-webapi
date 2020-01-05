

var assert = require('assert');
var user = require('../app/Models/utilizador');


/**
 * Tests the user class.
 */
describe('User Class Tests', () => {

    let john, joe, dan;
    /**
     * Creates an user in the test database.
    */
    it('creates users', (done) => {
        john = new user({ nome: 'John', pass: '123456', email: 'email1@email.com', morada: 'coiso', tipoUtilizador: undefined});
        joe = new user({ nome: 'Joe', pass: '123456', email: 'email1@email.com', morada: 'coiso', tipoUtilizador: undefined});
        dan = new user({ nome: 'Dan', pass: '123456', email: 'email1@email.com', morada: 'coiso', tipoUtilizador: undefined});

        Promise.all([john.save(), joe.save(), dan.save()])
            .then(() => done());

        /**john.save()
            .then(() => { assert(!john.isNew); done(); })
            .catch((err) => { assert.fail(err); });
            */

    });
    
     /**
     * Creates three global users before each 
     * test in the database.
     */
    /** 
    let john, joe, dan;

    beforeEach((done) => {
        john = new user({ nome: 'John', pass: '123456', email: 'email1@email.com', morada: 'coiso', tipoUtilizador: undefined});
        joe = new user({ nome: 'Joe', pass: '123456', email: 'email1@email.com', morada: 'coiso', tipoUtilizador: undefined});
        dan = new user({ nome: 'Dan', pass: '123456', email: 'email1@email.com', morada: 'coiso', tipoUtilizador: undefined});

        Promise.all([john.save(), joe.save(), dan.save()])
            .then(() => done());
    });
*/
    /**
     * Finds an user by id.
     */
    it('finds an user by id', (done) => {
        user.findOne({ _id: dan._id })
            .then((user) => {
                assert(user.nome == dan.nome);
                done();
            })
            .catch((err) => { assert.fail(err); });
    });

    /**
     * Finds an user by name.
     */
    it('finds an user by name', (done) => {
        user.findOne({ nome: dan.nome })
            .then((user) => {
                assert(user.nome == dan.nome);
                done();
            })
            .catch((err) => { assert.fail(err); });
    });


    /**
     * Finds all the users.
     */
    it('finds all the users', (done) => {
        user.find()
            .then((utilizadors) => {
                assert(utilizadors.length == 3);
                done();
            })
            .catch((err) => { assert.fail(err); });
    });

    /**
     * Removes an user by id
     */
    it('removes an user', (done) => {
        user.deleteOne({ _id: joe._id })
            .then(() => user.findOne({ _id: joe._id }))
            .then((user) => {
                assert(user == null);
                done();
            })
            .catch((err) => { assert.fail(err); });
    });

    
});


