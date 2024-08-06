//Programa pra pedir a altura de uma pessoa e a partir da altura, calcular e mostrar qual o peso ideal, conforme o calculo avaixo:
//Homem:(72,7*altura)-58; mulher((62,10*altura)-44).

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para ler e armazenar a entrada do usuário.

let pesoideal;
let altura = parseFloat(readline.question("Qual a sua altura em metros(Ex.:1.88)?  "));
let sexo = parseInt(readline.questionInt("Qual seu sexo? Digite 1- para Feminino ou 2- para Masculino  "  ));


 switch (sexo) {
        case 1:
          pesoideal = ((altura * 62.10)-44);
          console.log(`O seu peso ideal é ${pesoideal} kilos.`);
          break;
        case 2:
          pesoideal = ((altura * 72.7)-58);
          console.log(`O seu peso ideal é ${pesoideal} kilos.`);
          break;
       default:
          console.log("Opcao inválida.");
          break;
        }
  