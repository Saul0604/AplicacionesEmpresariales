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