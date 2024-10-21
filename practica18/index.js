const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(__dirname + '/views/inicio.html');
    res.sendFile(__dirname + '/views/inicio.html');
});

app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/views/nosotros.html');
});

app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/views/productos.html');
});

app.get('/contacto', (req, res) => {
    res.redirect('/nosotros');
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
});

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});