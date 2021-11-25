//eh maior
let input = require('fs').readFileSync('stdin', 'utf-8');

let [valorA, valorB, valorC] = input.split(' ').map(item => parseInt(item));

let maiorAB = (valorA + valorB + Math.abs(valorA - valorB)) / 2
let eMaior = maiorAB > valorC ? maiorAB : valorC

console.log(`${eMaior} eh o maior`);