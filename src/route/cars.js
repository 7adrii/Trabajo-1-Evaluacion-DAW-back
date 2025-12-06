const express = require('express');
const router = express.Router();

const { getCars, getCarById, getCarByModelo, postCar, putCar, delCar } = require('../controller/cars');
router.get('/cars', getCars);
router.get('/cars/id/:id', getCarById);
router.get('/cars/modelo/:modelo', getCarByModelo);
router.post('/cars', postCar);
router.put('/cars/:id', putCar);
router.delete('/cars/:id', delCar);

module.exports = router;