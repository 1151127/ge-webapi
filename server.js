// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

//Router
var utilizadorRouter = require('./app/Routes/utilizadorRouter');
var tipoUtilizadorRouter = require('./app/Routes/tipoUtilizadorRouter');
var encomendaRouter = require('./app/Routes/encomendaRouter');
var estatisticaRouter = require('./app/Routes/estatisticaRouter');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://root:qwert19@gedatabase-clbjy.azure.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }); // connect to our database


//CORS
var whitelist = ['https://moc-app.herokuapp.com', 'http://localhost:4200']
app.use(cors({
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}));

var port = process.env.PORT || 8080;        // set our port
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function (req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// ROUTES FOR OUR API
// =============================================================================
app.use('/api/utilizador', utilizadorRouter);
app.use('/api/tipoUtilizador', tipoUtilizadorRouter);
app.use('/api/encomenda', encomendaRouter);
app.use('/api/estatistica', estatisticaRouter);
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;