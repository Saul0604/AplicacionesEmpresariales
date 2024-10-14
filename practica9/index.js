console.log('Hola mundo');

//function obtenerDatos(nombre, edad) {
//     return `Nombre: ${nombre}, Edad: ${edad}`;
// }

// const obtenerDatos = (nombre, edad) => `Nombre: ${nombre}, Edad: ${edad}`;

// console.log(obtenerDatos('Juan', 25)); // Nombre: Juan, Edad: 25
console.log('Hola mundo');

const { nombre, apellido, edad } = require('./datos');
const obtenerDatos = require('./obtenerDatos');

console.log(obtenerDatos(nombre, apellido, edad)); // Nombre: Renata Ayala, Edad: 21