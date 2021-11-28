let input = require('fs').readFileSync('stdin', 'utf-8');

let idade = parseInt(input);
let dias = [365, 30, 1];
let add = [];

for (let dia of dias) {
  add.push(parseInt(idade / dia))
  idade = idade % dia;
};

add = `${add[0]} ano(s)\n${add[1]} mes(es)\n${add[2]} dia(s)`;
console.log(add);