const db = require('../configuration/database').db;

const findAllCars = (async () => {
    return await db('cars').select('*');
});

module.exports = {
    findAllCars
};