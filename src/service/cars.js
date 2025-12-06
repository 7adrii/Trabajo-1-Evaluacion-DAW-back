const db = require('../configuration/database').db;

const findAllCars = (async () => {
    return await db('cars').select('*');
});

const findCarById = (async (id) => {
    return await db('cars').select('*').where({id: id}).first();
});

const findCarByName = (async (name) => {
    return await db('cars').select('*').where({name: name}).first();
});

const carExistById = (async (id) => {
    const car =  await db('cars').select('*').where({id: id}).first();
    return car != null;
});

const carExistByName = (async (name) => {
    const car =  await db('cars').select('*').where({name: name}).first();
    if(city === undefined){
        return false;
    }
    return true;
});


module.exports = {
    findAllCars,
    findCarById,
    findCarByName,
    carExistById,
    carExistByName
};