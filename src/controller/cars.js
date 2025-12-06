const {findAllCars, findCarById, findCarByModelo, carExistById, carExistByModelo} = require('../service/cars');

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

const getCarByModelo = (async (req, res) => {
    const modelo = req.params.modelo;

    if (!await carExistByModelo(modelo)) {
        return res.status(404).json({
            code: 404,
            title: 'Not-Found',
            message: `El coche con nombre ${modelo} no existe`
        });
    }

    const carModelo = await findCarByModelo(modelo);
});

const postCar = (async (req, res) => {
    const modelo = req.body.modelo;
    if (await carExistByModelo(modelo)) {
        return res.status(409).json({
            code: 409,
            title: 'Conflict',
            message: `El coche con nombre ${modelo} ya existe`
        })
    }
    const marca = req.body.marca;
    const potencia = req.body.potencia;
    const precio = req.body.precio;
    const fechaSalida = req.body.fechaSalida;
    const transmision = req.body.transmision;
    const url = req.body.url;

    const newCar = await addCar(modelo, marca, potencia, precio, fechaSalida, transmision, url);

    return res.status(201).json(newCar);
});

module.exports = {
    getCars,
    getCarById,
    getCarByModelo,
    postCar
};