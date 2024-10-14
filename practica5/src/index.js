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
class Persona {
    constructor(nombrez, apellidoz, edadz) {
        this.nombrez = nombrez;
        this.apellidoz = apellidoz;
        this.edadz = edadz;
    }
    getNombrez(nombrez) {
        return this.nombrez;
    }
    setNombrez(nombrez) {
        this.nombrez = nombrez;
    }
    getApellidoz(apellidoz) {
        return this.apellidoz;
    }
    setApellidoz(apellidoz) {
        this.apellidoz = apellidoz;
    }
    getEdadz(edadz) {
        return this.edadz;
    }
    setEdadz(edadz) {
        this.edadz = edadz;
    }
}
let alberto = new Persona('Alberto', 'Perez', 25);
alberto.edadz = 20;
console.log(alberto.nombrez, alberto.apellidoz, alberto.edadz);
let pipe = new Persona('Pipe', 'Gomez', 23);
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const usuarioInterface = new UserAccount('imagin dragons', 1);
console.log(usuarioInterface.name, usuarioInterface.id);
//reto: crear 5 clases para usar en nuestro proyecto de la tienda virtual 
//crear sus gets y sets, un constructor y un método
//class Productos, class Carrito, class Usuario, class MetodosDePago
class Productos {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    getNombre(nombre) {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getPrecio(precio) {
        return this.precio;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    getCantidad(cantidad) {
        return this.cantidad;
    }
    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }
    mostrarProducto() {
        console.log('Nombre:', this.nombre, 'Precio:', this.precio, 'Cantidad:', this.cantidad);
    }
}
class Carrito {
    constructor(productos, total) {
        this.productos = productos;
        this.total = total;
    }
    getProductos(productos) {
        return this.productos;
    }
    setProductos(productos) {
        this.productos = productos;
    }
    getTotal(total) {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    mostrarCarrito() {
        console.log('Productos:', this.productos, 'Total:', this.total);
    }
}
class Usuario {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    getNombre(nombre) {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellido(apellido) {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getEdad(edad) {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    mostrarUsuario() {
        console.log('Nombre:', this.nombre, 'Apellido:', this.apellido, 'Edad:', this.edad);
    }
}
class MetodosDePago {
    constructor(tarjeta, efectivo) {
        this.tarjeta = tarjeta;
        this.paypal = efectivo;
    }
    getTarjeta(tarjeta) {
        return this.tarjeta;
    }
    setTarjeta(tarjeta) {
        this.tarjeta = tarjeta;
    }
    getEfectivo(efectivo) {
        return this.paypal;
    }
    setEfectivo(efectivo) {
        this.paypal = efectivo;
    }
    mostrarMetodosDePago() {
        console.log('Tarjeta:', this.tarjeta, 'Efectivo:', this.paypal);
    }
}
