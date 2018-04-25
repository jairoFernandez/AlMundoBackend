var express = require('express');
var server = express();
var bodyParser  = require("body-parser");
var path = require('path');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, 'assets'))); // Add folder assets for public use

/**
 * Router home with service
 */
var home = require('./routes/home');

server.use('/api/', home);

var port = process.env.PORT || '9000';

server.listen(port, (err)=>{
    console.log("Server up " + port);
});