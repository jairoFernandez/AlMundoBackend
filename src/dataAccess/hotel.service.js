var data = require('../data/data.json');
const Hotel = require('../models').Hotel;

var hotelService = function () {

    get = async function (filters) {    
        var hotels = await Hotel.find(filters);
        return hotels;
    }      

    return {
        get: get
    }
}

module.exports = hotelService;