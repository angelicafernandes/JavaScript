//Programa para solicitar dois numeros, e informar o maior deles.

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para ler e armazenar a entrada do usuário.

let num1 = parseInt(readline.questionInt("Informe o primeiro numero: "));
let num2 = parseInt(readline.questionInt("Informe o segundo numero: "));

if(num1 > num2){
    console.log(`O maior numero é: ${num1}`);
 } else if(num1 <num2){
       console.log(`O maior numero é: ${num2}`);
       }else{
       console.log("Os numeros são iguais");
}