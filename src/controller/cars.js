const {findAllCars, findCarById, findCarByModelo, carExistById, carExistByModelo, addCar, modifyCar, removeCar} = require('../service/cars');

const getCars = (async (req, res) => {
    const cars =  await findAllCars();
    res.status(200).json({
        code: 200,
        title: 'success',
        message: 'Operación realizada con éxito',
        count: cars.length,
        data: cars
    });
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
    res.status(200).json({
        code: 200,
        title: 'success',
        message: `Coche con id ${id} obtenido con éxito`,
        data: carId
    });
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
    res.status(200).json({
        code: 200,
        title: 'success',
        message: `Coche con modelo ${modelo} obtenido con éxito`,
        data: carModelo
    });
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
    const color = req.body.color;

    const newCar = await addCar(modelo, marca, potencia, precio, fechaSalida, transmision, url, color);

    return res.status(201).json({
        code: 201,
        title: 'Created',
        message: `El coche ${modelo} se ha creado con éxito`,
        data: {
            id: newCar.id,
            modelo,
            marca,
            potencia,
            precio,
            fechaSalida,
            transmision,
            url,
            color
        }
    });
});

const putCar = (async (req, res) => {
    const id = req.params.id;
    if (!await carExistById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'Not-Found',
            message: `El coche con id ${id} no existe`
        });
    }
    const modelo = req.body.modelo;
    const marca = req.body.marca;
    const potencia = req.body.potencia;
    const precio = req.body.precio;
    const fechaSalida = req.body.fechaSalida;
    const transmision = req.body.transmision;
    const url = req.body.url;
    const color = req.body.color;

    await modifyCar(id, modelo, marca, potencia, precio, fechaSalida, transmision, url, color);

    return res.status(200).json({
        code: 200,
        title: 'updated',
        message: `El coche con id ${id} se ha modificado con éxito`,
    });
});

const delCar = (async (req, res) => {
    const id = req.params.id;
    if (!await carExistById(id)) {
        return res.status(404).json({
            code: 404,
            title: 'Not-Found',
            message: `El coche con id ${id} no existe`
        });
    }
    await removeCar(id);
    res.status(200).json({
        code: 200,
        title: 'deleted',
        message: `El coche con id ${id} se ha eliminado con éxito`
    });
});

module.exports = {
    getCars,
    getCarById,
    getCarByModelo,
    postCar,
    putCar,
    delCar
};