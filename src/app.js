const express = require('express');

const router = require('./route/cars');

const app = express();
app.use(express.json());

app.use('/', router);

app.listen(8080, () => {
    console.log("Iniciando el servidor en el puerto 8080");
});