const express = require('express');

const router = require('./route/cars');

const app = express();
app.use(express.json());

app.use('/', router);

app.use((req, res) => {
    res.status(404).json({
        code: 404,
        title: 'not-found',
        message: 'Endpoint no encontrado'
    });
});

app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({
        code: 500,
        title: 'internal-server-error',
        message: 'Error interno del servidor'
    });
});

app.listen(8080, () => {
    console.log("Iniciando el servidor en el puerto 8080");
});