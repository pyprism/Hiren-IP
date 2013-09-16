
/*
 * GET home page.
 */
var S = require('string');

exports.root = function(req, res){
    if(S(req.headers['user-agent']).startsWith("curl")){
        res.end("IP_Addrs: "+ req.ip );
    }
    else{
        res.render('index', { ip: req.ip ,
                              ua : req.headers['user-agent'] });
    }

};

exports.ua = function(req,res){
    if(S(req.headers['user-agent']).startsWith("curl")){
        res.end("User_Agent: " + req.headers['user-agent']);
    }
    else{
        res.end('User Agent:' + req.headers['user-agent']);
    }
};
