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
app.engine('handlebars', exphbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');
app.use(express.favicon(__dirname + '/public/favicon.ico'));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.root);
app.get('/ua', routes.ua);
app.get('/ip',routes.ip);
//For 404

app.get('*', function(req, res){
  res.send('<h1>Opps!Page not found</h1>', 404);
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
