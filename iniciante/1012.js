let input = require('fs').readFileSync('stdin', 'utf-8');

let [valorA, valorB, valorC] = input.split(' ').map(item => parseFloat(item));
const pi = 3.14159;

let areaTriangulo = (valorA * valorC / 2).toFixed(3);
let areaCirculo = (pi * Math.pow(valorC, 2)).toFixed(3);
let areaTrapezio = ((valorA + valorB) * valorC / 2).toFixed(3);
let areaQuadrado = (Math.pow(valorB, 2).toFixed(3));
let areaRetangulo = (valorA * valorB).toFixed(3);


console.log(`TRIANGULO: ${areaTriangulo}\nCIRCULO: ${areaCirculo}\nTRAPEZIO: ${areaTrapezio}\nQUADRADO: ${areaQuadrado}\nRETANGULO: ${areaRetangulo}`);

