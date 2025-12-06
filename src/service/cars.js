const db = require('../configuration/database').db;

const findAllCars = (async () => {
    return await db('cars').select('*');
});

const findCarById = (async (id) => {
    return await db('cars').select('*').where({id: id}).first();
});

const findCarByModelo = (async (modelo) => {
    return await db('cars').select('*').where({modelo: modelo}).first();
});

const carExistById = (async (id) => {
    const car =  await db('cars').select('*').where({id: id}).first();
    return car != null;
});

const carExistByModelo = (async (modelo) => {
    const car =  await db('cars').select('*').where({modelo: modelo}).first();
    if(car === undefined){
        return false;
    }
    return true;
});

const addCar = (async (modelo, marca, potencia, precio, fechaSalida, transmision, url) => {
    return await db('cars').insert({
        modelo: modelo,
        marca: marca,
        potencia: potencia,
        precio: precio,
        fechaSalida: fechaSalida,
        transmision: transmision,
        url: url
    });
});

module.exports = {
    findAllCars,
    findCarById,
    findCarByModelo,
    carExistById,
    carExistByModelo,
    addCar,
};