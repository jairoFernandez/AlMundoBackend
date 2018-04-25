var express = require('express');
var server = express();
var bodyParser  = require("body-parser");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

var home = require('./routes/home');

server.use('/api/', home);

server.listen(5000, (err)=>{
    console.log("Server up");
});