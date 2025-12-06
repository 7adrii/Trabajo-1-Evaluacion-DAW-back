const {findAllCars, findCarById, findCarByName, carExistById, carExistByName} = require('../service/cars');

const getCars = (async (req, res) => {
    const cars =  await findAllCars();
    res.status(200).json(cars);
});

const getCarById = (async (req, res) => {
    const id = req.params.id;

    if (!await carExistById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'Not-Found',
            message: `El coche con id ${id} no existe`
        });
    }

    const carId = await findCarById(id);
    res.status(200).json(carId);
});

const getCarByName = (async (req, res) => {
    const name = req.params.name;

    if (!await carExistByName(name)) {
        return res.status(404).json({
            code: 404,
            title: 'Not-Found',
            message: `El coche con nombre ${name} no existe`
        });
    }

    const carName = await findCarByName(name);
});

module.exports = {
    getCars,
    getCarById,
    getCarByName
};