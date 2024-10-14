const _ = require('lodash'); // Importa lodash
//El _ es una convención para lodash
console.log('Hola mundo practica 17');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(_.chunk(array, 2)); // Usa lodash.chunk

let arreglo = ['saul', 'juan', 'pedro', 'jose', 'maria', 'luis', 'ana', 'laura', 'jorge', 'lucia'];

console.log(_.chunk(arreglo, 2)); // Usa lodash.chunk
//el .chunk es una funcion de lodash que divide un array en subarrays de la longitud que se le indique

console.log(_.reverse(array)); // Usa lodash.reverse
//el .reverse es una funcion de lodash que invierte el orden de los elementos de un array

console.log(_.compact(arreglo)); // Usa lodash.compact
//el .compact es una funcion de lodash que elimina los elementos falsy de un array

let array1 = ['flash', 'superman', 'batman']
let array2 = ['ironman', 'thor', 'hulk']

console.log(_.concat(array1, array2)); // Usa lodash.concat
//el .concat es una funcion de lodash que concatena dos arrays

let array3 = ['luke', 'leia', 'yoda', 'chewbacca', 'han solo', 'r2d2', 'c3po', 'obi wan', 'darth vader']
let array4 = ['yoda', 'padme', 'qui gon', 'mace windu', 'jar jar', 'darth maul', 'anakin']

console.log(_.difference(array3, array4)); // Usa lodash.difference
//el .difference es una funcion de lodash que devuelve los elementos de un array que no estan en el otro array

let array5 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(_.drop(array5, 5)); // Usa lodash.drop
//el .drop es una funcion de lodash que elimina los primeros n elementos de un array

const numeroAleatorio = _.random(0, 100); // Usa lodash.random
console.log(numeroAleatorio);

const saludar = () => {
    console.log('Hola mundo');
}

saludar(); 

const saludarMayito = _.once(saludar);
saludarMayito();
saludarMayito();
saludarMayito();

const users = [
    { usuario: 'pepe', edad: 20 },
    { usuario: 'juan', edad: 30 },
    { usuario: 'pedro', edad: 40 },
    { usuario: 'luis', edad: 50 },
    { usuario: 'maria', edad: 60 },];

//para ordenar alfabeticamente
const sortedUsers = _.sortBy(users, ['usuario']);  // Usa lodash.sortBy
//si agregas ,[asc] lo ordena de forma ascendente y si agregas ,[desc] lo ordena de forma descendente
//si lo dejas así es ascendente por defecto 
//si cambiamos el parametro por edad, ordena por edad
console.log(sortedUsers);

const obtieneNumero = () => _.random(0, 100);


let result = _.times(5, obtieneNumero); // Usa lodash.times
console.log(result);
//el .times es una funcion de lodash que ejecuta una funcion n veces y devuelve un array con los resultados

/*          Reto 1
Crear un arreglo con 100 numeros aleatorios y mostrar los numeros pares
y los numeros impares en arreglos diferentes
*/ 
const reto1 = () => {
    let numeros = _.times(100, obtieneNumero);
    let pares = [];
    let impares = [];
    numeros.forEach(numero => {
        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    });
    console.log('Pares:', pares);
    console.log('Impares:', impares);
}
reto1();

/*          Reto 2
Crear un arreglo con 100 números aleatorios y mostrar los números primos
y los números no primos en arreglos diferentes
*/

const reto2 = () => {
    let numeros = _.times(100, obtieneNumero);
    let primos = [];
    let noPrimos = [];
    numeros.forEach(numero => {
        let contador = 0;
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                contador++;
            }
        }
        if (contador === 2) {
            primos.push(numero);
        } else {
            noPrimos.push(numero);
        }
    });
    console.log('Primos:', primos);
    console.log('No primos:', noPrimos);
}
reto2();

/*        Reto 3
Crear un arreglo de nombres y mostrar los nombres que empiecen con la letra 'A'  
y los nombres que no empiecen con la letra 'A' en arreglos diferentes
*/

const reto3 = () => {
    let nombres = ['ana', 'luis', 'jose', 'maria', 'alberto', 'jorge', 'andrea', 'laura', 'javier', 'alicia'];
    let conA = [];
    let sinA = [];
    nombres.forEach(nombre => {
        if (nombre[0].toLowerCase() === 'a') {
            conA.push(nombre);
        } else {
            sinA.push(nombre);
        }
    });
    console.log('Con A:', conA);
    console.log('Sin A:', sinA);
}
reto3();