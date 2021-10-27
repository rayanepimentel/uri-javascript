//Diferença

let input = require('fs').readFileSync('stdin', 'utf-8');

let [a, b, c, d] = input.split('\n').map(item => parseFloat(item));

let diferenca = a * b - c * d

console.log("DIFERENCA = " + diferenca);