//Programa para ler a variável Peso, (peso de peixes) e calcular o excesso de peso(>50kilos) E A MULTA EXCEDENTE (R$ 4,00 por kilo).

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para ler e armazenar a entrada do usuário.

let peso = parseInt(readline.questionInt("Qual o peso pescado? "));
let excesso = (peso-50);
let multa = (4 * excesso);

if (peso > 50) {
console.log(`Sr. Papo de Pescador, o senhor pagará o valor de R$ ${multa}, referente à ${excesso} kilos excedido do peso limite que é de 50kilos`);
} else { 
console.log("Sr. Papo de Pescador, como o senhor não excedeu o limite de peso permitido (50kilos), não pagará multa.");
}
