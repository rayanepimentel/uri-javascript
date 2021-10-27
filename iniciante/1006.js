//Media 2
let input = require('fs').readFileSync('stdin', 'utf-8');

let [a, b, c] = input.split('\n').map(item => parseFloat(item));

let media = (a * 2 + b * 3 + c * 5) / 10;

console.log("MEDIA = " + media.toFixed(1));