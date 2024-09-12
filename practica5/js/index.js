var miVariable = 'Hola mundo';
console.log(miVariable);
var personay = {
    nombrey: 'Lucas',
    apellidoy: 'Gomez',
    edady: 23
};
var nombrey = personay.nombrey, apellidoy = personay.apellidoy, _a = personay.edady, edady = _a === void 0 ? 24 : _a;
console.log('nombre:', nombrey, 'apellido:', apellidoy, 'edad:', edady);
var miNombre = 'saul';
var a1 = miNombre[0], a2 = miNombre[1], a3 = miNombre[2], a4 = miNombre[3];
console.log(a1, a2, a3, a4); //s a u l
var frutas = ['apple', 'orange', 'banana', 'pear'];
//let [f1, f2, f3] = frutas;
var f1 = frutas[0], f3 = frutas[3];
console.log(f1, f3);
var Persona = /** @class */ (function () {
    function Persona(nombrez, apellidoz, edadz) {
        this.nombrez = nombrez;
        this.apellidoz = apellidoz;
        this.edadz = edadz;
    }
    Persona.prototype.getNombrez = function (nombrez) {
        return this.nombrez;
    };
    Persona.prototype.setNombrez = function (nombrez) {
        this.nombrez = nombrez;
    };
    Persona.prototype.getApellidoz = function (apellidoz) {
        return this.apellidoz;
    };
    Persona.prototype.setApellidoz = function (apellidoz) {
        this.apellidoz = apellidoz;
    };
    Persona.prototype.getEdadz = function (edadz) {
        return this.edadz;
    };
    Persona.prototype.setEdadz = function (edadz) {
        this.edadz = edadz;
    };
    return Persona;
}());
var alberto = new Persona('Alberto', 'Perez', 25);
alberto.edadz = 20;
console.log(alberto.nombrez, alberto.apellidoz, alberto.edadz);
var pipe = new Persona('Pipe', 'Gomez', 23);
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var usuarioInterface = new UserAccount('imagin dragons', 1);
console.log(usuarioInterface.name, usuarioInterface.id);
//reto: crear 5 clases para usar en nuestro proyecto de la tienda virtual 
//crear sus gets y sets, un constructor y un método
//class Productos, class Carrito, class Usuario, class MetodosDePago
var Productos = /** @class */ (function () {
    function Productos(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    Productos.prototype.getNombre = function (nombre) {
        return this.nombre;
    };
    Productos.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Productos.prototype.getPrecio = function (precio) {
        return this.precio;
    };
    Productos.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Productos.prototype.getCantidad = function (cantidad) {
        return this.cantidad;
    };
    Productos.prototype.setCantidad = function (cantidad) {
        this.cantidad = cantidad;
    };
    Productos.prototype.mostrarProducto = function () {
        console.log('Nombre:', this.nombre, 'Precio:', this.precio, 'Cantidad:', this.cantidad);
    };
    return Productos;
}());
var Carrito = /** @class */ (function () {
    function Carrito(productos, total) {
        this.productos = productos;
        this.total = total;
    }
    Carrito.prototype.getProductos = function (productos) {
        return this.productos;
    };
    Carrito.prototype.setProductos = function (productos) {
        this.productos = productos;
    };
    Carrito.prototype.getTotal = function (total) {
        return this.total;
    };
    Carrito.prototype.setTotal = function (total) {
        this.total = total;
    };
    Carrito.prototype.mostrarCarrito = function () {
        console.log('Productos:', this.productos, 'Total:', this.total);
    };
    return Carrito;
}());
var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Usuario.prototype.getNombre = function (nombre) {
        return this.nombre;
    };
    Usuario.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Usuario.prototype.getApellido = function (apellido) {
        return this.apellido;
    };
    Usuario.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Usuario.prototype.getEdad = function (edad) {
        return this.edad;
    };
    Usuario.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Usuario.prototype.mostrarUsuario = function () {
        console.log('Nombre:', this.nombre, 'Apellido:', this.apellido, 'Edad:', this.edad);
    };
    return Usuario;
}());
var MetodosDePago = /** @class */ (function () {
    function MetodosDePago(tarjeta, efectivo) {
        this.tarjeta = tarjeta;
        this.paypal = efectivo;
    }
    MetodosDePago.prototype.getTarjeta = function (tarjeta) {
        return this.tarjeta;
    };
    MetodosDePago.prototype.setTarjeta = function (tarjeta) {
        this.tarjeta = tarjeta;
    };
    MetodosDePago.prototype.getEfectivo = function (efectivo) {
        return this.paypal;
    };
    MetodosDePago.prototype.setEfectivo = function (efectivo) {
        this.paypal = efectivo;
    };
    MetodosDePago.prototype.mostrarMetodosDePago = function () {
        console.log('Tarjeta:', this.tarjeta, 'Efectivo:', this.paypal);
    };
    return MetodosDePago;
}());
