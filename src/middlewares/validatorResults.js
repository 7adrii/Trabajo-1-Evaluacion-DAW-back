const { validationResults } = require('express-validator');

const validatorResults = (req, res, next) => {
    const errors = validationResults(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            code: 400,
            title: 'validation-error',
            errors: errors.array()
        });
    }
    next();
};

module.exports = { validatorResults };