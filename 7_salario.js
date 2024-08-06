//Programa pra pedir quanto o funcionário ganha por hora trabalhada e quantas horas trabalhou no mês, calcular e mostrar o salario no referido mês.

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para intere para ler a entrada do usuário.


let salhora = parseFloat(readline.question("Quanto voce ganha por hora em Reais(Ex:25.60)? "));
let mes =  readline.question("Qual mes deseja saber seu salario? ");
let horames = parseFloat(readline.question("Quantas horas voce trabalhou nesse mes (Ex: 148.10)? "));

let salario = (salhora * horames);

console.log(`Seu salário no mês de ${mes}, foi de R$ ${salario.toFixed(2)}, referente à ${horames.toFixed(2)} horas trabalhadas.`);



