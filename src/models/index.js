'use strict';

const mongoose = require('../config/mongoose');
const hotelSchema = require('./schemas').hotelSchema;

const models = {
    Hotel: mongoose.model('Hotel', hotelSchema)
}

module.exports = models;