/**
 * Created by prism on 9/5/15.
 */

require('newrelic');
var express = require('express'),
    favicon = require('serve-favicon');

var app = express();

//app config
app.enable('trust proxy');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
if (app.get('env') === 'production') {
    app.set('view cache', true);
}

var index = require('./routes/index')();
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


var port = process.env.PORT || 6546;
app.listen(port, function(){
    console.log('App is running on port: ' + port);
});