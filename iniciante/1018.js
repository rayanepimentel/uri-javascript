
let input = require('fs').readFileSync('stdin', 'utf-8');

let valor = parseInt(input);
const cedulas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (let notas of cedulas) {
  let quantidadeNotas = parseInt(valor / notas);
  console.log(`${quantidadeNotas} nota(s) de R$ ${notas},00`);
  valor = valor % notas;
};