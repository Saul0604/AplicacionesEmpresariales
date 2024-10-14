"use strict";
//ENUMS
var Color;
(function (Color) {
    Color[Color["Rojo"] = 100] = "Rojo";
    Color[Color["Verde"] = 101] = "Verde";
    Color[Color["Azul"] = 102] = "Azul";
})(Color || (Color = {}));
console.log(Color.Verde);
console.log(Color.Rojo);
let colorPrimario = Color.Rojo;
colorPrimario = Color.Verde;
// colorPrimario = 29;  --------- no deja porque la variable colorPrimario ahora es de tipo 'Color'
console.log('ColorPrimario ', colorPrimario);
var DireccionesCardinales;
(function (DireccionesCardinales) {
    DireccionesCardinales["Norte"] = "Norte";
    DireccionesCardinales["Sur"] = "Sur";
    DireccionesCardinales["Este"] = "Este";
    DireccionesCardinales["Oeste"] = "Oeste";
})(DireccionesCardinales || (DireccionesCardinales = {}));
let direccion = DireccionesCardinales.Sur;
console.log('Dirección ', direccion);
var CodigosDeEstado;
(function (CodigosDeEstado) {
    CodigosDeEstado[CodigosDeEstado["Exito"] = 200] = "Exito";
    CodigosDeEstado[CodigosDeEstado["NoEncontrado"] = 404] = "NoEncontrado";
    CodigosDeEstado[CodigosDeEstado["ErrorInterno"] = 500] = "ErrorInterno";
})(CodigosDeEstado || (CodigosDeEstado = {}));
let codigoDeEstado = CodigosDeEstado.Exito;
console.log('Código de estado: ', codigoDeEstado);
var NivelDeVolumen;
(function (NivelDeVolumen) {
    NivelDeVolumen[NivelDeVolumen["Bajo"] = 1] = "Bajo";
    NivelDeVolumen[NivelDeVolumen["Medio"] = 5] = "Medio";
    NivelDeVolumen[NivelDeVolumen["Alto"] = 10] = "Alto";
})(NivelDeVolumen || (NivelDeVolumen = {}));
let nivelDeVolumen = NivelDeVolumen.Medio;
console.log('Nivel de Volumen ', nivelDeVolumen);
//RETO PRACTICA 6
var MetodoDePagoEnum;
(function (MetodoDePagoEnum) {
    MetodoDePagoEnum["TarjetaCredito"] = "Tarjeta de Cr\u00E9dito";
    MetodoDePagoEnum["TarjetaDebito"] = "Tarjeta de D\u00E9bito";
    MetodoDePagoEnum["PayPal"] = "PayPal";
    MetodoDePagoEnum["Transferencia"] = "Transferencia Bancaria";
    MetodoDePagoEnum["Efectivo"] = "Efectivo";
})(MetodoDePagoEnum || (MetodoDePagoEnum = {}));
// Uso del enum en la clase MetodoDePago
class MetodoDePago {
    constructor(tipo, numeroCuenta, titular) {
        this.tipo = tipo;
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
    }
    getTipo() {
        return this.tipo;
    }
    getNumeroCuenta() {
        return this.numeroCuenta;
    }
    getTitular() {
        return this.titular;
    }
    procesarPago(monto) {
        console.log(`Procesando pago de ${monto} con el método ${this.tipo} a nombre de ${this.titular}`);
    }
}
// Ejemplo de uso
const pago = new MetodoDePago(MetodoDePagoEnum.Transferencia, '87654321', 'María López');
pago.procesarPago(250);
