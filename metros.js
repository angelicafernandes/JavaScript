const readline = require('readline-sync');
let metros = parseFloat(readline.question("Digite a metragem? "));
let centimetros = (metros * 100);
console.log(metros + "metros é igual a:", centimetros + "centimetros");