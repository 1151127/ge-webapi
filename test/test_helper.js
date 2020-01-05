var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://adminteste:a123456@ds259738.mlab.com:59738/arqsi_tests', {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ',error);
    });

    after(function (done) {
        mongoose.connection.db.dropDatabase(function () {
            mongoose.connection.close(function () {
                done();
            });
        });
    });
/** 
beforeEach((done) => {
    mongoose.connection.collections.pokemons.drop(() => {
        //this function runs after the drop is completed
       done(); //go ahead everything is done now.
    }); 
    
});
*/