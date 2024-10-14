"use strict";
function sum(a, b) {
    return a + b;
}
let resultado = sum(2, 3);
console.log(resultado); //5
const fsum = sum(5, 80);
console.log(fsum); //85
let sumArrow = (a, b) => a + b;
let funcionAnonima = function () {
    console.log("Hola mundo");
};
funcionAnonima(); //Hola mundo
let funcionAnonimaArrow = () => console.log("Hola soy una funcion arrow anonima");
funcionAnonimaArrow(); //Hola soy una funcion arrow anonima
function saludo(nombre) {
    return `Hola ${nombre}`;
}
//Funcion arro que no es anonima
let saludoArrow = (nombre) => `Hola ${nombre}`;
console.log(saludo("Juan"));
const saludoArrw = (nombre) => "Hola " + nombre;
console.log(saludoArrw("Juan")); //Hola Juan
function error(mensaje) {
    let mensajeError = document.getElementById("mensajeError");
    mensajeError.innerHTML = "Error en la app";
    throw new Error(mensaje);
}
error("Error fatal");
function operacion(a, b, accion) {
    switch (accion) {
        case "suma":
            return a + b;
        case "resta":
            return a - b;
        case "multiplicacion":
            return a * b;
        case "division":
            return a / b;
        default:
            return 0;
    }
}
console.log(operacion(2, 3, "suma")); //5
console.log(operacion(2, 3, "resta")); //-1
