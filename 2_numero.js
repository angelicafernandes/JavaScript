//Programa para pedir ao usuário que insira um número e, em seguida, exibirá a mensagem com o número fornecido.

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para intere para ler a entrada do usuário.

let num = parseInt(readline.question("Informe um numero:"));//atribui à variável "num", a informação do usuário

console.log(`O número informado foi ${num}.`);//Mostra a resposta atribuida pelo usuário

