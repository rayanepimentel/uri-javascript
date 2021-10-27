let input = require('fs').readFileSync('stdin', 'utf-8');

let [a, b, c] = input.split('\n').map(item => parseFloat(item));

let idFuncionario = a
let salario = (b * c).toFixed(2);

console.log(`NUMBER = ${idFuncionario}\nSALARY = U$ ${salario}`);
