/**
 * Created by prism on 9/5/15.
 */
var express = require('express');

var routes = function() {
    var router = express.Router();

    router.route('/')
        .get(function(req, res) {
            if (req.headers['user-agent'].startsWith('curl')) {
                res.send("IP_Address: " + (req.header('x-forwarded-for') || req.ip) );
            } else {
                res.render('index', {
                    ip: req.header('x-forwarded-for') || req.ip,
                    ua: req.headers['user-agent']
                });
            }
        });

    return router;
};

module.exports = routes;