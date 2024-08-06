///Programa pra pedir a altura de uma pessoa e a partir da altura, calcular e mostrar qual o peso ideal, conforme o calculo  (72,7*altura)-58.
const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para ler e armazenar a entrada do usuário.

let altura = parseFloat(readline.question("Qual a sua altura em metros(Ex.:1.88)?  "));

let pesoideal = ((altura * 72.7)-58);
     
        
console.log(`O seu peso ideal é ${pesoideal} kilos`);
