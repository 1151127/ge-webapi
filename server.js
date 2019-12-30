// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')

//Router
var utilizadorRouter = require('./app/Routes/utilizadorRouter');
var tipoUtilizadorRouter = require('./app/Routes/tipoUtilizadorRouter');
var encomendaRouter = require('./app/Routes/encomendaRouter');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://root:qwert19@gedatabase-clbjy.azure.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true}); // connect to our database

//CORS
var corsOptions = {
  origin: 'https://moc-app.herokuapp.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

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
app.use('/api/utilizador',cors(corsOptions), utilizadorRouter);
app.use('/api/tipoUtilizador',cors(corsOptions), tipoUtilizadorRouter);
app.use('/api/encomenda',cors(corsOptions), encomendaRouter);
app.use(function (req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(createError(404));
});

app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;