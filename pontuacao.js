
const readline = require('readline-sync');
let listamult3 = [];
let listamult5 = [];

console.log("====== SISTEMA PARA INFORMAR OS MÚLTIPLOS DE 3 E 5 ======");
let n1 = parseInt(readline.question("Qual o primeiro Numero? "));
let n2 = parseInt(readline.question("Qual o segundo Numero? "));

// Determina o maior e o menor número
let maior, menor;
if (n1 > n2) {
   maior = n1;
   menor = n2;
} else {
   maior = n2;
   menor = n1;
}

// Encontra os múltiplos de 3 e 5 entre os números informados
for (let cont = menor; cont <= maior; cont++) {
    if (cont % 3 === 0) {
        listamult3.push(cont);
    }
    if (cont % 5 === 0) {
        listamult5.push(cont);
    }                    
}

// Exibe o resultado dos múltiplos
console.log(`Os múltiplos de 3 entre ${n1} e ${n2} são: `, listamult3);
console.log(`E os múltiplos de 5 entre ${n1} e ${n2} são: `, listamult5);
console.log("ESPERO QUE TENHA TIRADO SUA DÚVIDA");