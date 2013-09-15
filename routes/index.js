
/*
 * GET home page.
 */

exports.root = function(req, res){
    if(req.headers['user-agent'] == "curl/7.29.0"){
        res.end("IP_Addrs: "+ req.ip );
    }
    else{
        res.render('index', { ip: req.ip ,
                              ua : req.headers['user-agent'] });
    }

};

exports.ua = function(req,res){
    if(req.headers['user-agent'] == "curl/7.29.0"){
        res.end("user_agent: " + req.headers['user-agent']);
    }
    else{
        req.end('<h2>User Agent:' + req.headers['user-agent'] + '</h2>')
    }
}



