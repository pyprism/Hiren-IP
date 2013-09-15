
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/favicon.ico'));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.root);
app.get('/ua', routes.ua);


app.listen(2000)  ;
