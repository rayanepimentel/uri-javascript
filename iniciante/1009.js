let input = require('fs').readFileSync('stdin', 'utf-8');

let valores = input.split('\n').map(item => item);

let salario = parseFloat(valores[1]);
let venda = parseFloat(valores[2]);
let comissao = venda * 0.15;

let total = (salario + comissao).toFixed(2)

console.log(`TOTAL = R$ ${total}`);

