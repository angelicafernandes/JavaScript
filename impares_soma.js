//PROGRAMA PARA INFORMAR OS NÚMEROS ÍMPARES EXISTENTE ENTRE 1 E N, E A SOMA ENTRE ELES
// ONDE (N=NÚMERO QUE O USUÁRIO DIGITAR)

const readline = require('readline-sync');
let somaimpares = 0;
listaimpares = [];

console.log("====== SISTEMA PARA INFORMAR OS NÚMEROS ÍMPARES ENTRE 1 E N: ======");
let num = parseInt(readline.question("Digite um numero (N): "));

//=====================================CÁLCULO PARA ADICIONAR O NÚMERO À LISTA E À SOMA, C ASO ESTE SEJA IMPAR

for (let cont = num; cont >= 1; cont--) {
    if (cont % 2 !== 0) {
        listaimpares.push(cont); //ADICIONANDO O NÚMERO ÍMPAR À LISTA
        somaimpares = (somaimpares + cont); //SOMANDO O NÚMERO ÍMPAR AO TOTAL ANTERIOR
}   
}
console.log(`OS NÚMEROS ÍMPARES ENTRE 1 E ${num} E A SOMA ENTRE ELES, SÃO:  `);
console.log(listaimpares);
console.log(somaimpares);
console.log("ESPERO QUE TENHA RESOLVIDO SUA DÚVIDA");
