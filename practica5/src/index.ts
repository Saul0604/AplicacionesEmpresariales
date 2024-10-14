let miVariable: string = 'Hola mundo';
console.log(miVariable);

const personay = {
    nombrey: 'Lucas',
    apellidoy: 'Gomez',
    edady: 23
};

let {nombrey, apellidoy, edady = 24} = personay;
console.log('nombre:', nombrey, 'apellido:', apellidoy, 'edad:', edady);

let miNombre:string = 'saul';
let [a1, a2, a3, a4]:string= miNombre;
console.log(a1, a2, a3, a4);    //s a u l

const frutas = ['apple', 'orange', 'banana', 'pear'];
//let [f1, f2, f3] = frutas;
let [f1,,, f3] = frutas;
console.log(f1,f3);

class Persona {
    nombrez: string;
    apellidoz: string;
    edadz: number;

    constructor(nombrez: string, apellidoz: string, edadz: number) {
        this.nombrez = nombrez;
        this.apellidoz = apellidoz;
        this.edadz = edadz;
    }
    getNombrez(nombrez: string) {
        return this.nombrez;
    }
    setNombrez(nombrez: string) {
        this.nombrez = nombrez;
    }
    getApellidoz(apellidoz: string) {
        return this.apellidoz;
    }
    setApellidoz(apellidoz: string) {
        this.apellidoz = apellidoz;
    }
    getEdadz(edadz: number) {
        return this.edadz;
    }
    setEdadz(edadz: number) {
        this.edadz = edadz;
    }
}

let alberto = new Persona('Alberto', 'Perez', 25);
alberto.edadz = 20;
console.log(alberto.nombrez, alberto.apellidoz, alberto.edadz);

let pipe = new Persona('Pipe', 'Gomez', 23);

interface User {
    name : string;
    id : number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id:number){
        this.name = name;
        this.id = id;
    }
}

const usuarioInterface: User = new UserAccount('imagin dragons', 1);
console.log(usuarioInterface.name, usuarioInterface.id); 

//reto: crear 5 clases para usar en nuestro proyecto de la tienda virtual 
//crear sus gets y sets, un constructor y un método
//class Productos, class Carrito, class Usuario, class MetodosDePago

class Productos {
    nombre: string;
    precio: number;
    cantidad: number;

    constructor(nombre: string, precio: number, cantidad: number){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    getNombre(nombre: string){
        return this.nombre;
    }
    setNombre(nombre: string){
        this.nombre = nombre;
    }
    getPrecio(precio: number){
        return this.precio;
    }
    setPrecio(precio: number){
        this.precio = precio;
    }
    getCantidad(cantidad: number){
        return this.cantidad;
    }
    setCantidad(cantidad: number){
        this.cantidad = cantidad;
    }
    mostrarProducto(){
        console.log('Nombre:', this.nombre, 'Precio:', this.precio, 'Cantidad:', this.cantidad);
    }
}

class Carrito {
    productos: string[];
    total: number;

    constructor(productos: string[], total: number){
        this.productos = productos;
        this.total = total;
    }

    getProductos(productos: string[]){
        return this.productos;
    }
    setProductos(productos: string[]){
        this.productos = productos;
    }
    getTotal(total: number){
        return this.total;
    }
    setTotal(total: number){
        this.total = total;
    }
    mostrarCarrito(){
        console.log('Productos:', this.productos, 'Total:', this.total);
    }
}

class Usuario {
    nombre: string;
    apellido: string;
    edad: number;

    constructor(nombre: string, apellido: string, edad: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getNombre(nombre: string){
        return this.nombre;
    }
    setNombre(nombre: string){
        this.nombre = nombre;
    }
    getApellido(apellido: string){
        return this.apellido;
    }
    setApellido(apellido: string){
        this.apellido = apellido;
    }
    getEdad(edad: number){
        return this.edad;
    }
    setEdad(edad: number){
        this.edad = edad;
    }
    mostrarUsuario(){
        console.log('Nombre:', this.nombre, 'Apellido:', this.apellido, 'Edad:', this.edad);
    }
}

class MetodosDePago {
    tarjeta: string;
    paypal: number;

    constructor(tarjeta: string, efectivo: number){
        this.tarjeta = tarjeta;
        this.paypal = efectivo;
    }

    getTarjeta(tarjeta: string){
        return this.tarjeta;
    }
    setTarjeta(tarjeta: string){
        this.tarjeta = tarjeta;
    }
    getEfectivo(efectivo: number){
        return this.paypal;
    }
    setEfectivo(efectivo: number){
        this.paypal = efectivo;
    }
    mostrarMetodosDePago(){
        console.log('Tarjeta:', this.tarjeta, 'Efectivo:', this.paypal);
    }
}