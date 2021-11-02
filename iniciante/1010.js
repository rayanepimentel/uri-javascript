// calculo simples

let input = require('fs').readFileSync('stdin', 'utf-8');

let lines = input.split('\n');

let primeiraLinha = lines[0].split(' ');
let valorPrimeiraLinha = primeiraLinha[1] * primeiraLinha[2];

let segundaLinha = lines[1].split(' ')
let valorSegundaLinha = segundaLinha[1] * segundaLinha[2]

let valorTotal = valorPrimeiraLinha + valorSegundaLinha

console.log("VALOR A PAGAR: R$",valorTotal.toFixed(2))