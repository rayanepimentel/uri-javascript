let input = require('fs').readFileSync('stdin', 'utf-8');

let [valores1, valores2] = input.split('\n');

let [x1, y1] = valores1.split(' ');
let [x2, y2] = valores2.split(' ');

let calcular = Math.sqrt(((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2))), 2);
let distancia = calcular.toFixed(4);


console.log(distancia)
