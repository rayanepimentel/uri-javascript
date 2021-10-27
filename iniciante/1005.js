//Media 1
let input = require('fs').readFileSync('stdin', 'utf-8');

let [a, b] = input.split('\n').map(item => parseFloat(item));

let pesoA = a * 3.5
let pesoB = b * 7.5

let media = (pesoA + pesoB) / 11;

console.log("MEDIA = " + media.toFixed(5));