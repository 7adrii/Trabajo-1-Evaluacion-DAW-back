const {findAllCars } = require('../service/cars');

const getCars = (async (req, res) => {
    const cars =  await findAllCars();
    res.status(200).json(cars);
});

module.exports = {
    getCars
};