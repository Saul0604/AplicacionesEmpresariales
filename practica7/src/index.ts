function sum(a: number, b: number): number {
  return a + b;
}

let resultado = sum(2, 3);
console.log(resultado);//5

const fsum = sum(5,80);
console.log(fsum); //85

let sumArrow = (a: number, b: number): number => a + b;

let funcionAnonima = function (){
    console.log("Hola mundo");
   }

funcionAnonima() //Hola mundo

let funcionAnonimaArrow = () => console.log("Hola soy una funcion arrow anonima");
funcionAnonimaArrow() //Hola soy una funcion arrow anonima


function saludo(nombre: string): string {
  return `Hola ${nombre}`;
}

//Funcion arro que no es anonima

let saludoArrow = (nombre: string): string => `Hola ${nombre}`;

console.log(saludo("Juan"));

const saludoArrw = (nombre: string) => "Hola " + nombre;
console.log(saludoArrw("Juan")); //Hola Juan

function error(mensaje: string): never {
  let mensajeError: any = document.getElementById("mensajeError");
  mensajeError.innerHTML = "Error en la app";
  throw new Error(mensaje);
}
error("Error fatal");

type action = 'suma' | 'resta' | 'multiplicacion' | 'division';

function operacion(a: number, b: number, accion: action): number {
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