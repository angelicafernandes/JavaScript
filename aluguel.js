const readline = require('readline-sync');
let tipo = parseFloat(readline.question("Qual o tipo de Im ovel (Apartamento ou Casa?) "));
let area = parseFloat(readline.question("Qual a AREA DO Imovel em metros? "));
let aluguel = (area * 20);
let titulo = "===== Valor do Aluguel ===== ";
let titarea = " Area:" + area
let valoraluguel = "Valor do Aluguel: R$" + aluguel;
console.log(titulo);
console.log(titarea, valoraluguel);
#resumo = "${tipo} - ${Area:} - $valordoaluguel: R$";
#console.log(resumo)