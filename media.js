const readline = require('readline-sync');
let nota1 = parseFloat(readline.question("Qual a nota do 1 Bimestre? "));
let nota2 = parseFloat(readline.question("Qual a nota do 2 Bimestre? "));
let nota3 = parseFloat(readline.question("Qual a nota do 3 Bimestre? "));
let nota4 = parseFloat(readline.question("Qual a nota do 4 Bimestre? "));
media = (nota1 + nota2 + nota3 + nota4) / 4
console.log("Sua media foi:" + media);