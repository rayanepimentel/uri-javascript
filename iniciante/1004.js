//Produto simples
let input = require('fs').readFileSync('stdin', 'utf-8');

let [x, y] = input.split('\n').map(item => parseInt(item));

let prod = x * y;

console.log(`PROD = ${prod}`);