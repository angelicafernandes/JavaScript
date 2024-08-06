//Programa para pedir ao usuário 4 notas bimestrais e mostre a média das 4 notas.

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para intere para ler a entrada do usuário.

let nota1 = parseInt(readline.questionInt("Insira a nota do 1 Bimestre:"));
let nota2 = parseInt(readline.questionInt("Insira a nota do 2 Bimestre:"));
let nota3 = parseInt(readline.questionInt("Insira a nota do 3 Bimestre:"));
let nota4 = parseInt(readline.questionInt("Insira a nota do 4 Bimestre:"));

let media = (nota1+nota2+nota3+nota4)/4; 

console.log(`A média dos 4 Bimestres foi: ${media}`);

