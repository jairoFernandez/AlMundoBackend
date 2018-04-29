var express = require('express');
var server = express();
var bodyParser  = require("body-parser");
var path = require('path');
var cors = require('cors');
var env = require('node-env-file'); // .env file
env(__dirname + '/../.env');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, 'assets'))); // Add folder assets for public use
server.use(cors());
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });
 
var home = require('./routes/home');

server.use('/api/', home);

var port = process.env.PORT || '9000';

server.listen(port, (err)=>{
    console.log("Server up " + port);
});