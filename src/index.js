var express = require('express');
var server = express();

var home = require('./routes/home');

server.use('/', home);

server.listen(5000, (err)=>{
    console.log("Server up");
});