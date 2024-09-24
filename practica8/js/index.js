console.log('Hello World!');
var nuevoHeroe = 'Flash';
function returnName() {
    return nuevoHeroe;
}
var heroeNombre = returnName();
var otraVarianle = returnName();
console.log("de que tipo es heroeNombre", typeof heroeNombre);
var nombreCompleto = function (nombre, apellido) {
    return "".concat(nombre, " ").concat(apellido);
};
var tuNombre = nombreCompleto('Clark', 'Kent');
console.log(tuNombre);
var nombreCompleto2 = function (nombre, apellido) {
    return "".concat(nombre, " ").concat(apellido || 'No tiene apellido');
};
//aqui si borramos el apellido nos regresara "Barry No tiene apellido"
var tuNombre2 = nombreCompleto2('Barry');
console.log(tuNombre2);
var nombreCompleto3 = function (nombre, apellido, mayusculas) {
    if (mayusculas === void 0) { mayusculas = false; }
    if (mayusculas) {
        return "".concat(nombre.toUpperCase(), " ").concat(apellido ? apellido.toUpperCase() : 'NO TIENE APELLIDO');
    }
    else {
        return "".concat(nombre, " ").concat(apellido || 'No tiene apellido');
    }
};
var tuNombre3 = nombreCompleto3('bruce', 'wayne', true);
console.log(tuNombre3);
var tuNombre4 = nombreCompleto3('Diana', 'Prince', false);
console.log(tuNombre4);
var nombreCompleto4 = function (nombre) {
    var apellidos = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        apellidos[_i - 1] = arguments[_i];
    }
    return "".concat(nombre, " ").concat(apellidos.join(' '));
};
var tuNombre5 = nombreCompleto4('Peter', 'Benjamin', 'Parker');
console.log(tuNombre5);
