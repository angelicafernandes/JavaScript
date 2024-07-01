//PROGRAMA PARA CALCULAR O INGRESSO DO CINEMA

const readline = require('readline-sync');

console.log(` ====== CÁLCULO DO CINEMA ======`  );
let opcao1 = parseInt(readline.question("Digite (1)-Vip/ (2)-Standard ? "));
let opcao2 = parseInt(readline.question("Digite (1)-Com Combo / (2)-Sem Combo ? "));

if (opcao1 !== 1) {
    console.log("OPÇÃO INVÁLIDA");
}   if else (opcao2 !== 1 ) {
    console.log("OPÇÃO INVÁLIDA");
    else
    console.log("INGRESSO VIP COM PIPOCA = R$ 200,00");
}


} else if (opcao1 === 1 && opcao2 === 2) {
    console.log("INGRESSO VIP SEM PIPOCA = R$ 150,00");
} else if (opcao1 === 2 && opcao2 === 1) {
    console.log("INGRESSO STANDARD COM PIPOCA = R$ 70,00");
} else if (opcao1 === 2 && opcao2 === 2) {
    console.log("INGRESSO STANDARD SEM PIPOCA = R$ 40,00");
} else {
    console.log("OPÇÃO INVÁLIDA");
}








// //CALCULAR =O PREÇO DO INGRESSO
// if  (opcao1 !== 1) {
// console.log("OPÇÃO INVÁLIDA");}
// else if    {
//     if  (opcao2 !== 1) {
//         console.log("OPÇÃO INVÁLIDA");}
//         else if    {
// (opcao1 === 1 && opcao2 === 1)   {
//         console.log("INGRESSO VIP COM PIPOCA = R$ 200,.00 ");



// }   


// (opcao1 === 1 && opcao2 === 1)   {
//    console.log("INGRESSO VIP COM PIPOCA = R$ 200,.00 ");
// else if {
//     (opcao1 !== 1) || (opcao2 !== 2)
//     console.log("OPÇÃO INVÁLIDA");
// }   

// }
// if (opcao1 === 1 && opcao2 === 2)   {
//    console.log("INGRESSO VIP SEM PIPOCA = R$ 200,.00 ");
// }  
// if (opcao1 === 2 && opcao2 === 1)   {
//    console.log("INGRESSO STANDARD COM PIPOCA = R$ 200,.00 ");
// }  
// if (opcao1 === 2 && opcao2 === 2)   {
//    console.log("INGRESSO STANDARD SEM PIPOCA = R$ 200,.00 ");
// }
// else{
//     console.log(OPÇÃO INVÁLIDA);
// }



// // Encontra os números
// for (console.log("Ingresso let cont = 1; cont <= num; cont++) {
//      listanum.push(cont);
//      somanum = somanum + cont;
//     }                    

// // Exibe os números e a soma
// console.log(`Os números de 1 até ${num} e o somatório entre eles são, respectivamente: `   );
// console.log(listanum);
// console.log(somanum);
