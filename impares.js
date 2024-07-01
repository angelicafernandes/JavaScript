//PROGRAMA PARA DIZER OS NÚMEROS ÍMPARES EXISTENTE ENTRE 1 E N
// ONDE (N=NÚMERO QUE O USUÁRIO DIGITAR)

const readline = require('readline-sync');

console.log("====== SISTEMA PARA INFORMAR OS NÚMEROS ÍMPARES ENTRE 1 E N: ======");
let num = parseInt(readline.question("Digite um numero (N): "));
console.log(`Números ímpares entre 1 e ${num}:`);


//=====================================EXECUÇÃO DO CÁLCULO PARA INFORMAR OS NÚMEROS ÍMPARES ENTRE 1 E N

for (let cont = num; cont >= 1; cont--) {
    if (cont % 2 !== 0) {
        console.log(cont);
    }
}

