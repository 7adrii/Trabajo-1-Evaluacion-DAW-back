const {body, param} = require('express-validator');

const validateCarId = [
    param('id')
        .notEmpty().withMessage('Id obligatorio')
        .isInt().withMessage('Id debe ser un número entero mayor que 0'),
];

const validateCarModelo = [
    param('modelo')
        .notEmpty().withMessage('Modelo obligatorio')
        .isString().withMessage('Modelo debe ser una cadena de texto'),
];

const validateCreateCar = [
    body('modelo')
        .notEmpty().withMessage('Modelo obligatorio')
        .isString().withMessage('Modelo debe ser una cadena de texto')
        .isLength({min: 1, max: 255}).withMessage('Modelo debe tener entre 1 y 255 caracteres'),

    body('marca')
        .notEmpty().withMessage('Marca obligatorio')
        .isString().withMessage('La marca debe ser una cadena de texto'),

    body('potencia')
        .notEmpty().withMessage('Potencia obligatoria')
        .isInt({min: 1}).withMessage('La potencia debe ser un número entero mayor que 0'),

    body('precio')
        .notEmpty().withMessage('Precio obligatorio')
        .isFloat({min: 1}).withMessage('El precio debe ser un número positivo'),
    body('fechaSalida')
        .notEmpty().withMessage('Fecha de salida obligatoria')
        .isDate().withMessage('La fecha de salida debe ser una fecha válida'),
    body('transmision')
        .notEmpty().withMessage('Transmisión obligatoria')
        .isBoolean().withMessage('La transmisión debe ser un valor booleano'),
    body('url')
        .notEmpty().withMessage('URL obligatoria')
        .isURL().withMessage('La URL debe ser una URL válida'),
    body('color')
        .notEmpty().withMessage().apply('Color del coche obligatorio')
        .isString().withMessage('El color tiene que ser una cadena de texto valida')
];

const validateUpdateCar = [
    param('id')
        .optional()
        .isInt().withMessage('Id debe ser un número entero mayor que 0'),
    body('modelo')
        .optional()
        .isString().withMessage('El modelo debe ser una cadena de texto')
        .isLength({min: 1, max: 255}).withMessage('El modelo debe tener entre 1 y 255 caracteres'),
    body('marca')
        .optional()
        .isString().withMessage('La marca debe ser una cadena de texto'),
    body('potencia')
        .optional()
        .isInt({min: 1}).withMessage('La potencia debe ser un número entero mayor que 0'),
    body('precio')
        .optional()
        .isFloat({min: 1}).withMessage('El precio debe ser un número positivo'),
    body('fechaSalida')
        .optional()
        .isDate().withMessage('La fecha de salida debe ser una fecha válida'),
    body('transmision')
        .optional()
        .isBoolean().withMessage('La transmisión debe ser un valor booleano'),
    body('url')
        .optional()
        .isURL().withMessage('La URL debe ser una URL válida'),
];

module.exports = {
    validateCarId,
    validateCarModelo,
    validateCreateCar,
    validateUpdateCar,
};