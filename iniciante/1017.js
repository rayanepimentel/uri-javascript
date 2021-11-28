let input = require('fs').readFileSync('stdin', 'utf-8');

let [tempoGasto, velocidadeMedia] = input.split('\n');

let total = tempoGasto * velocidadeMedia;
let combustivelGasto = total / 12;

console.log(combustivelGasto.toFixed(3));
