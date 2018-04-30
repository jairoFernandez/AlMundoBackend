'use strict';
const mongoose = require('../../config/mongoose');
const Schema = mongoose.Schema;

const schemas = {
    hotelSchema: new Schema({
        name: { type: String },
        stars: { type: String },
        price: { type: String },
        image: { type: String },
        amenities: [String]
    })
}
module.exports = schemas;