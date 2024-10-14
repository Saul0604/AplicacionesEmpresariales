console.log('Hello World!');

const nuevoHeroe:string = 'Flash';

function returnName():string {
    return nuevoHeroe;
}

const heroeNombre = returnName();
let otraVarianle = returnName();

console.log("de que tipo es heroeNombre", typeof heroeNombre);


const nombreCompleto = (nombre:string, apellido:string):string => {
    return `${nombre} ${apellido}`;
}

const tuNombre = nombreCompleto('Clark', 'Kent');
console.log(tuNombre);


const nombreCompleto2 = (nombre:string, apellido?:string):string => {
    return `${nombre} ${apellido || 'No tiene apellido'}`;
}
//aqui si borramos el apellido nos regresara "Barry No tiene apellido"
const tuNombre2 = nombreCompleto2('Barry');
console.log(tuNombre2);

const nombreCompleto3 = (nombre: string, apellido?: string, mayusculas:boolean=false): string => {
    if (mayusculas) {
        return `${nombre.toUpperCase()} ${apellido ? apellido.toUpperCase() : 'NO TIENE APELLIDO'}`;
    } else {
        return `${nombre} ${apellido || 'No tiene apellido'}`;
    }
}

const tuNombre3 = nombreCompleto3('bruce', 'wayne', true);
console.log(tuNombre3);

const tuNombre4 = nombreCompleto3('Diana', 'Prince', false);
console.log(tuNombre4);

const nombreCompleto4 = (nombre: string, ...apellidos:string[])=> {
    return `${nombre} ${apellidos.join(' ')}`;
}

const tuNombre5 = nombreCompleto4('Peter', 'Benjamin', 'Parker');
console.log(tuNombre5);