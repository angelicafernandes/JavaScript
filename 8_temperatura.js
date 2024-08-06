//Programa pra pedir a temperatura em Graus Celsius , tranformar e mostrar em Graus Fahrenheit.

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para intere para ler a entrada do usuário.

let celsius = parseInt(readline.questionInt("Informe quantos Graus Celsius deseja tranformar para Fahrenheit:"));

let Fahrenheit = ((celsius* 1.8)+32);
console.log(`${celsius} Graus Celsius, equivale à ${Fahrenheit} Graus Fahrenheit.`);

