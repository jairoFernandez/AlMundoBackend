var express = require('express');
var server = express();
var bodyParser  = require("body-parser");
var path = require('path');

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, 'assets'))); // Add folder assets for public use

/**Swagger docs */
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
 
// var options = {
//   explorer : true
// };
 
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

/**
 * Router home with service
 */
var home = require('./routes/home');

server.use('/api/', home);

server.listen(5000, (err)=>{
    console.log("Server up");
});