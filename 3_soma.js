//Programa para pedir ao usuário que insira dois números e imprimi a soma.

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para intere para ler a entrada do usuário.

let num1 = parseInt(readline.questionInt("Insira o primeiro numero:"));
let num2 = parseInt(readline.questionInt("Insira o segundo numero:"));
let soma = (num1 + num2);

console.log(`A soma de ${num1} e ${num2}, é igual à ${soma}.`);
