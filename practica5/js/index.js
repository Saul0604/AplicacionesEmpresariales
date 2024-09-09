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
