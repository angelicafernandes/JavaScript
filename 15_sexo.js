//Programa para verificar se uma letra digitrada é "F" ou "M", dependendo da palara escrita pelo usuario for FEMININA OU Masculina.

const readline = require('readline-sync');// chama a biblioteca readline-sync e atribui à variável "readline", para ler e armazenar a entrada do usuário.

let palavra = readline.question("Qual a palavra: Feminino ou Masculino:");

if (palavra === "Feminino") {
console.log("A letra a ser informada é (F)");
}else if (palavra === "Masculino") {
 console.log("A palavra a ser informada é (M)");
} else {
 console.log("Palavra digitada incorretamente");
}

