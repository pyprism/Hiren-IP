var S = require('string');

//index view
exports.root = function(req, res){
    if(S(req.headers['user-agent']).startsWith("curl")){
        res.end("IP_Addrs: "+ req.ip );
    }
    else{
        res.render('index', { ip: req.ip ,
                              ua : req.headers['user-agent'] });
    }

};

//commandline view "/ua"
exports.ua = function(req,res){
    if(S(req.headers['user-agent']).startsWith("curl")){
        res.end("User_Agent: " + req.headers['user-agent']);
    }
    else{
        res.end('User Agent:' + req.headers['user-agent']);
    }
};
