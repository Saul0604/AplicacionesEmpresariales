"use strict";
let tupla = ['lucas', 23];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);
let ourTuple = ['Lucas', 23, false];
console.log('nombre', ourTuple[0]);
console.log('edad', ourTuple[1]);
//ternario
let casado = ourTuple[2] ? 'Casado' : 'Soltero';
console.log('estado civil:', casado);
let ourTuple2 = [22, true, 'saul'];
ourTuple2[0] = 24;
console.log(ourTuple2);
let ourReadOnlyTuple = [25, false, 'pipe'];
console.log('nombre:', ourReadOnlyTuple[2]);
const graph = [10, 25.12];
console.log('graph:', graph);
console.log('graph[1]:', graph[1]);
//desestructuracion de variables
const persona = {
    nombrex: 'Lucas',
    apellido: 'Gomez',
    edadx: 23
};
//let firstName = persona.nombre;
let { nombrex, apellido, edadx = 24 } = persona;
console.log('nombre:', nombrex, 'apellido:', apellido, 'edad:', edadx);
//usando ts y desestructuración de variables generar una
// una serie de fibonacci con hasta 100 numeros
//graficar los resultados en pantalla usando chart.js
function generarSerieFibonacci(n) {
    let serie = [0, 1];
    for (let i = 2; i < n; i++) {
        serie[i] = serie[i - 1] + serie[i - 2];
    }
    return serie;
}
const serieFibonacci = generarSerieFibonacci(25);
console.log(serieFibonacci);
