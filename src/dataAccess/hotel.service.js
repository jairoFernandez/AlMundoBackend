var data = require('../data/data.json');

var hotelService = function () {
    
    getAll = function () {
        return data;
    }

    return {
        getAll: getAll
    }
}

module.exports = hotelService;