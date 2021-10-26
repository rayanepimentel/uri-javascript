// Extremamente fácil

let input = require('fs').readFileSync('stdin', 'utf-8');

//console.log(typeof input) //1.
//console.log(input.split(" ")) //1.1
//console.log(input.split(" ").map(item => parseInt(item))) //1.1

let [a, b] = input.split(" ").map(item => parseInt(item))
    

console.log(`X = ${a+b}`); //1.3

//instruções:

/*
- No arquivo stind, você precisa passar dois valores que serão espectivamente a e b, exemplo:
10 3

- O let input já sabemos que ele irá ler tudo o que estiver no arquivo stind.

- Só que precisamos somar os dois valores:

1. Se você fizer console.log(typeof input), irá retornar uma sting
Realmente é uma string.

1.1 Precisamos imprimir o que estiver no stind separadamente.
Para isso vamos usar o split(" "), basicamente estamos dizendo para separar a string pelo espaço " ";
console.log(input.split(" ")) retorno seŕa ['10', '3'], agora temos os dois valores separados.
Mas ainda é uma string. Precisamos transformar a string no tipo number.

1.2 Nesse caso usaremos no map e parseInt, que irá mapear os itens e retornar em numero interios.
console.log(input.split(" ").map(item => parseInt(item))) retorno será number [10, 3], que são respectivamente [a, b].

1.3 Agora é só somar os valores a e b.

*/