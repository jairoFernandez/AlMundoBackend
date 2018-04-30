var data = require('../data/data.json');
const Hotel = require('../models').Hotel;

var hotelService = function () {

    get = async function (filters) {    
        var hotels = await Hotel.find(filters);
        return hotels;
    } 

    getById = async function(id){
        var hotel = await Hotel.findOne({_id: id});
        return hotel;
    }
    
    create = async function(hotel){
        var hotel = await Hotel.create(hotel);
        return hotel;
    }

    return {
        get: get,
        create: create,
        getById: getById
    }
}

module.exports = hotelService;