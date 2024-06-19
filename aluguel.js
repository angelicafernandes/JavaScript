
const readline = require('readline-sync');
let tipoim = (readline.question("Qual o tipo de Imovel (Apartamento ou Casa?) "));
let area = (readline.question("Qual a Area do Imovel em metros? "));
let valorm2 = (readline.question("Qual o valor/M2? "));
let aluguel = (area * valorm2);

let titulo = ("====== VALOR DO ALUGUEL =====");
console.log(titulo);

let resultado = `${tipoim} - Area de ${area} M2  - Valor do Aluguel:R$ ${aluguel.toFixed(2)}`;
console.log(resultado)


