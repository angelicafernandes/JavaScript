//PROGRAMA PARA O SOMATÓRIO DE UM 1 ATÉ O NÚMERO INFORMADO

const readline = require('readline-sync');

let somanum = 0;
listanum = [];


console.log(` ====== SISTEMA PARA INFORMAR O O SOMATÓRIO DE 1 ATÉ UM NÚMERO(N) ======`  );
let num = parseInt(readline.question("Digite o Numero? "));

// Encontra os números
for (let cont = 1; cont <= num; cont++) {
     listanum.push(cont);
     somanum = somanum + cont;
    }                    

// Exibe os números e a soma
console.log(`Os números de 1 até ${num} e o somatório entre eles são, respectivamente: `   );
console.log(listanum);
console.log(somanum);
