//PROGRAMA PARA CALCULAR O FATORIAL DE UM NÚMERO (N) INFORMADO

const readline = require('readline-sync');

listafat = [];
fat = 1;

console.log(` ====== SISTEMA PARA INFORMAR O FATORIAL DE UM NÚMERO(N) ======`  );
let num = parseInt(readline.question("Digite o Numero que deseja saber o Fatorial? "));

// Cálculo do Fat
orial de N
for (let cont = 1; cont <= num; cont ++ ) {
     listafat.push(cont);
     fat = fat * cont;
}                    

// Exibe os números e o fatorial
console.log(`O fatorial do número ${num} é: `   );
console.log(listafat);
console.log(fat);
