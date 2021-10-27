//Soma simples

let input = require('fs').readFileSync('stdin', 'utf-8');

[a, b] = input.split("\n").map(item => parseInt(item));

let soma = a + b

console.log(`SOMA = ${soma}`)

/*
A resolução é bem parecida com o exercicio 1001.js
A diferença é que dessa vez não será por espaço .split(" ") e sim por linha .split("\n")

Apague o que estiver no arquivo stdin e coloque:

30
10

*/