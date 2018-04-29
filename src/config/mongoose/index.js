'use strict';
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_MONGO);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Db ready!")
});

module.exports = mongoose;