/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path') ,
exphbs  = require('express3-handlebars'),
app = express();

// all environments
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.favicon(__dirname + '/public/favicon.ico'));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.root);
app.get('/ua', routes.ua);

//For 404

app.get('*', function(req, res){
  res.send('Page not found', 404);
});


app.listen(2000)  ;
console.log("Listening on http://127.0.0.1:2000");
