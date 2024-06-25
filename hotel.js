const readline = require('readline-sync');

let tipoquarto = readline.question("Qual o tipo de Quarto(Standard, Luxo ou Suite)?");
let diarias = parseInt(readline.question("Qual a quantidade de Diarias?"));
                   
if (tipoquarto == "Standard")      {
   let estadia = diarias * 150
   let resultado = estadia.toFixed(2)
   console.log(`Você ficou hospedado por ${diarias} dias no Quarto Standard - Totalizando o valor de R$ ${resultado}`);
} else if (tipoquarto == "Luxo")   {
     let estadia = (diarias * 300)
     let resultado = (estadia.toFixed(2))
     console.log(`Você ficou hospedado por ${diarias} dias no Quarto Luxo - Totalizando o valor de R$ ${resultado}`);
} else                             {
   let estadia = (diarias * 500) 
   let resultado = (estadia.toFixed(2))
   console.log(`Você ficou hospedado por ${diarias} dias no Quarto Suite - Totalizando o valor de R$ ${resultado}`);
}    
console.log("OBRIGADO PELA ESTADIA, VOLTE SEMPRE!!!")

