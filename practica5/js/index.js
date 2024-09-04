"use strict";
let miVariable = 'Hola mundo';
console.log(miVariable);
const personay = {
    nombrey: 'Lucas',
    apellidoy: 'Gomez',
    edady: 23
};
let { nombrey, apellidoy, edady = 24 } = personay;
console.log('nombre:', nombrey, 'apellido:', apellidoy, 'edad:', edady);
let miNombre = 'saul';
let [a1, a2, a3, a4] = miNombre;
console.log(a1, a2, a3, a4); //s a u l
const frutas = ['apple', 'orange', 'banana', 'pear'];
//let [f1, f2, f3] = frutas;
let [f1, , , f3] = frutas;
console.log(f1, f3);
