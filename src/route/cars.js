const express = require('express');
const router = express.Router();

const { getCars, postCars } = require('../controller/cars');
router.get('/cars', getCars);

module.exports = router;