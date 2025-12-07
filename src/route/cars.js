const express = require('express');
const router = express.Router();

const { getCars, getCarById, getCarByModelo, postCar, putCar, delCar } = require('../controller/cars');
const { validateCarId, validateCarModelo, validateCreateCar, validateUpdateCar } = require('../validador/cars');
const { validatorResults } = require('../middlewares/validatorResults');

router.get('/cars', getCars);
router.get('/cars/id/:id', validateCarId, validatorResults, getCarById);
router.get('/cars/modelo/:modelo', validateCarModelo, validatorResults, getCarByModelo);
router.post('/cars', validateCreateCar, validatorResults, postCar);
router.put('/cars/:id', validateUpdateCar, validatorResults, putCar);
router.delete('/cars/:id', validateCarId, validatorResults, delCar);

module.exports = router;