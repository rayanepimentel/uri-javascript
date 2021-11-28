let input = require('fs').readFileSync('stdin', 'utf-8');

let valor = parseInt(input);

let horas = parseInt(valor / 3600);
let resto = valor % 3600;
let minutos = parseInt(resto / 60);
let segundos = resto % 60;

console.log(`${horas}:${minutos}:${segundos}`);