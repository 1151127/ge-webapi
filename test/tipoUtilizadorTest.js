var assert = require('assert');
var userTipo = require('../app/Models/tipoUtilizador');

describe('User', function() {
    describe('#save()', function() {
      it('should save without error', function(done) {
        var utipo = new userTipo();
        utipo.desc =  'Presidente';
        utipo.save(done);
      });
    });
  });
