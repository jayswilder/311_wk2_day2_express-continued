const express = require('express')
const router = express.Router()
const vehicles = require('../data/vehicles');



router.get('/vehicles', (req, res) => res.json(vehicles));

router.get('/vehicles/:id', (req, res) => {
    const vehicleFound = vehicles.find(vehicle => vehicle._id === parseInt(req.params.id));

    if (vehicleFound) {
        res.json(vehicles.find(vehicle => vehicle._id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ Error: `No vehicle with the ID of ${req.params.id}` });
    }
});

let vehicleCounter = vehicles.length + 1;
let vehiclePostId = 1;
router.post('/vehicles', (req, res) => {
    const newVehicle = {
        postId: vehiclePostId,
        _id: vehicleCounter,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model
    }

    vehicleCounter++
    vehiclePostId++
    vehicles.push(newVehicle)
    res.json(vehicles)
});

module.exports = router;