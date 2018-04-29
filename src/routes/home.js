var express = require('express');
var router = express.Router();
var filterOdata = require('odata-v4-mongodb');

var hotelservice = require('../dataAccess/hotel.service')();

router.get('/', async (req, res)=>{
    res.send("Hola mundo");
});

router.get('/hotel', async(req, res)=>{
    var $filter = req.query['$filter'];
    var filters = filterOdata.createFilter($filter);        
    var hotels = await hotelservice.get(filters);    
    res.send(hotels);
});

module.exports = router;