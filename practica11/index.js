// Importa el módulo 'express' que es un framework para construir aplicaciones web en Node.js.
const express = require('express');

// Crea una instancia de una aplicación Express.
const app = express();

// Define el puerto en el que la aplicación escuchará las solicitudes.
const port = 3000;

// Define una ruta para la raíz ('/') que envía una respuesta 'Hello World!' cuando se accede.
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define una ruta para '/productos' que envía una respuesta 'Lista de productos' cuando se accede.
app.get('/productos', (req, res) => {
  res.send('Lista de productos');
});

// Inicia el servidor y hace que la aplicación escuche en el puerto definido.
// Muestra un mensaje en la consola cuando el servidor está corriendo.
app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`);
});