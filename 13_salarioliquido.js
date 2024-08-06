//Programa para perguntar quanto a pessoa ganha por hora, a quantidade de horas trabalhadas no mês, o salário bruto, calcular os descontos de IR/INSS/SINDICATO e informar o Salario Liquido.

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para ler e armazenar a entrada do usuário.


let salhora = parseFloat(readline.question("Quanto voce ganha por hora em Reais(Ex: 25.30)? "));
let horames = parseFloat(readline.question("Quantas horas voce trabalhou nesse mes(Ex: 5.35)? "));

let bruto = (salhora * horames);
let ir = (bruto * 0,11);
let inss = (bruto * 0,08);
let sindicato = (bruto * 0,05);
let liquido = (bruto-ir-inss-sindicato);

console.log(`Seu salário líquido é de R$ ${liquido.toFixed(2)}, sendo o Salário Bruto de R$ ${bruto.toFixed(2)}, com os descontos: IR R$ ${ir.toFixed(2)},INSS R$${inss.toFixed(2)} e Sindicato R$ ${sindicato.toFixed(2)}`);