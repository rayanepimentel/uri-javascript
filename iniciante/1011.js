let input = require('fs').readFileSync('stdin', 'utf-8');

var lines = input.split('\n');

let raio = parseFloat(lines);

const PI = 3.14159;

let esfera = (4/3) * PI * Math.pow(raio, 3);

console.log("VOLUME =", esfera.toFixed(3));
