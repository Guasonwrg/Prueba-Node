const sumar = require("./sumar.js");
const restar = require("./restar.js");
const multiplicar = require("./multiplicar.js");
const dividir = require("./dividir.js");

let numA = 10;
let numB = 2;

let suma = (sumar.sumar(numA,numB));
let resta = (restar.restar(numA,numB));
let producto = (multiplicar.multiplicar(numA,numB));
let division = (dividir.dividir(numA,numB));

console.log(`La suma de ${numA} + ${numB} = ${suma}`);
console.log(`La resta de ${numA} - ${numB} = ${resta}`);
console.log(`El producto de ${numA} * ${numB} = ${producto}`);
console.log(`La división de ${numA} / ${numB} = ${division}`);

