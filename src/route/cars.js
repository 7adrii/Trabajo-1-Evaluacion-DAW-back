const express = require('express');
const router = express.Router();

const { getCars, getCarById, getCarByModelo, postCar } = require('../controller/cars');
router.get('/cars', getCars);
router.get('/cars/id/:id', getCarById);
router.get('/cars/modelo/:modelo', getCarByModelo);
router.post('/cars', postCar);

module.exports = router;