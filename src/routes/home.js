var express = require('express');
var router = express.Router();

var hotelservice = require('../dataAccess/hotel.service')();

router.get('/', async (req, res)=>{
    res.send("Hola mundo");
});

router.get('/hotel', async(req, res)=>{
    var hotels = hotelservice.getAll();
    res.send(hotels);
});

module.exports = router;