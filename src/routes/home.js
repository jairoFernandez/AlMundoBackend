var express = require('express');
var router = express.Router();
var filterOdata = require('odata-v4-mongodb');
var hotelservice = require('../dataAccess/hotel.service')();
var fs = require('fs');

router.get('/', async (req, res)=>{
    res.send("Hola mundo");
});

router.get('/Hotel', async(req, res)=>{
    var $filter = req.query['$filter'];
    var filters = filterOdata.createFilter($filter);
    var hotels = await hotelservice.get(filters);
    res.send(hotels);
});

router.get('/Hotel/:id', async(req, res) => {
    var id = req.params['id'];
    var hotel = await hotelservice.getById(id);
    res.send(hotel);
});

router.post('/Hotel', async(req, res)=>{
    var image = req.body.image;
    var nameImagen = image.name;
    const base64Data = image.image.replace(/^data:([A-Za-z-+/]+);base64,/, '');
    req.body.image = nameImagen;
    var fileRoute = __dirname + `/../assets/images/hotels/${nameImagen}`;

    fs.writeFileSync(fileRoute, new Buffer(base64Data, 'base64'));
    var hotel = await hotelservice.create(req.body);
    res.send(hotel);
});

router.delete('/Hotel/:id', async(req, res)=>{
    await hotelservice.delete(req.params['id']);
    res.send({
        "OK": "Eliminado correctamente"
    });
});

module.exports = router;