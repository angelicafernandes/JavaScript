//Programa pra pedir um raio de um círculo ao usuário, calcular e mostrar a área do círculo.

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para intere para ler a entrada do usuário.

let raio = parseInt(readline.questionInt("Insira o raio do circulo em metros:"));
let diametro = (2*raio);
let area = (raio*3,14);

console.log(`À área do cículo com ${diametro} metros de diâmetro é igual à: ${area}metros`);



