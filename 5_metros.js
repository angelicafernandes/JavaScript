//Programa para converter metros para centimetors.

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para intere para ler a entrada do usuário.

let metros = parseInt(readline.questionInt("Insira a qtde de metros que deseja tranformar para centimetros:"));
let centimetros = (metros*100);

console.log(`${metros} metros, é igual à ${centimetros} centímetros.`);
