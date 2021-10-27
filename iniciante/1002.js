let input = require('fs').readFileSync('stdin', 'utf-8');

let raio = parseFloat(input);

const PI = 3.14159;
let area = PI * Math.pow(raio, 2);


console.log("A=" + area.toFixed(4));


/*
Apague tudo o que estiver no arquivo stdin e coloque 2.00

- Agora vamos converter a string (input) em number flutuante.
Nesse caso usaremos parseFloat() e armazenamos na variavel raio.

- Precisamos do PI, que será uma const já que o seu valor não altera.

- Sabendo que o calculo da area = pi * raio² 
Usaremos o método Math.pow(o valor, expoente) - Math.pow(raio, 2).
Você também pode fazer assim (raio * raio)

- E precisa ter até 4 casas decimais - toFixed(4)


*/