let input = require('fs').readFileSync('stdin', 'utf-8');

let valor = parseInt(input);
let converter = [3600, 60, 1];
let add = [];

for (let qtdConvertida of converter) {
  add.push(parseInt(valor / qtdConvertida));
  valor = valor % qtdConvertida;
}


console.log(add.join(":"));