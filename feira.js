const readline = require('readline-sync');
let prod1 = readline.question("Primeiro item da lista de compras? ");
let prod2 = readline.question("Segundo item da lista de compras? " );
let prod3 = readline.question("Terceiro item da lista de compras? " );
let prod4 = readline.question("Quarto item da lista de compras? ");
let prod5 = readline.question("Quinto item da lista de compras? ");
let mensagem = "Sua lista de Compras e:";
console.log(mensagem);
console.log(prod1 +(","), prod2 +(","), prod3+(","), prod4 + (" e"), prod5 );
console.log("BOAS COMPRAS!!!")
