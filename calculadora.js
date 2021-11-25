const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');
let process = require('process');

let operacion = process.argv[2];
let n1 = Number(process.argv[3]);
let n2 = Number(process.argv[4]);

//0           1                  2         3      4
//node   calculadora.js      operacion    n1      n2

if(operacion.toLowerCase() == "sumar"){
    console.log(sumar(n1, n2));
}

if(operacion.toLowerCase() == "restar"){
    console.log(restar(n1, n2));
}

if(operacion.toLowerCase() == "multiplicar"){
    console.log(multiplicar(n1, n2));
}

if(operacion.toLowerCase() == "dividir"){
    console.log(dividir(n1, n2));
}

console.log(operacion);



/* // PUNTO 1 ARRIBA

console.log(sumar(20,32));       // PUNTO 2
console.log(restar(8,17));       // PUNTO 2
console.log(multiplicar(5,48));  // PUNTO 3
console.log(multiplicar(0, 24)); // PUNTO 4
console.log(dividir(74, 16));    // PUNTO 5
console.log(dividir(21, 0));     // PUNTO 6 */