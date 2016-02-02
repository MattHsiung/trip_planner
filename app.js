//----------------
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var router = require('./routes/index.js');
var fs = require('fs');
var bodyParser = require('body-parser');
var app= express();
var port = 3000;
//----------------
app.use(express.static(__dirname+ '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({cache: false});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests
app.use('/', router)


//logging and bodyparsing
//routing static files

//404 error
// app.use()
//error handling
app.use(function(err, req, res, next){
	res.status(err.status||500);
	//render error

})







app.listen(port, function(){
	console.log('listening on port '+port+'...')
})