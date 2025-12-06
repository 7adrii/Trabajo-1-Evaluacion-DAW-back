const express = require('express');
const router = express.Router();

const { getCars, getCarById, getCarByName } = require('../controller/cars');
router.get('/cars', getCars);
router.get('/cars/id/:id', getCarById);
router.get('/cars/name/:name', getCarByName);

module.exports = router;