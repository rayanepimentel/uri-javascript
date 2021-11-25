let input = require('fs').readFileSync('stdin', 'utf-8');

let [valorKm, valorLitro] = input.split('\n');

let consumoMedio = (parseInt(valorKm) / valorLitro).toFixed(3);

console.log(`${consumoMedio} km/l`);

