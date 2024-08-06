//Programa pra calcular a media alcancada por aluno e apresentar "Aprovado" ou "Reprovado", considerando a média 7 ou "APROVADO COM Distinção"

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para ler e armazenar a entrada do usuário.

let nota1 = parseFloat(readline.question("Qual a primeira nota(Ex:6.50)? "));
let nota2 = parseFloat(readline.question("Qual a segunda nota(Ex:7.80)? "));

let media = (nota1+nota2)/2;

if (media >= 7.00 && media < 10.00){
console.log("Aprovado");
} else if (media < 7.00) {
    console.log("Reprovado");
    } else if (media = 10.00) {
       console.log("Aprovado com Distinção");
       } else {
          console.log("Notas erradas, impossivel calcular a média");
}

