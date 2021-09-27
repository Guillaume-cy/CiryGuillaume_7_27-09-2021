// imports

var express = require('express'); 

//instance server
var server = express(); 

//routes
server.get('/', function(req,res){
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<hi>Bonjour sur mon vieux serveur</h1>');
});

//Launch server
server.listen(8080, function(){
    console.log('server en ecoute');
});