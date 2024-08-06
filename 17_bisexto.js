//Ler um numero de uma ano qualquer informado pelo usuario e mostrar a mensagem se é bisexto ou não

const readline = require('readline-sync');

let ano = parseInt(readline.questionInt("Informe o ano: " ));

if (ano % 4 === 0){
    console.log(`O ano de ${ano} é Bisexto`);
} else {
    console.log(`O ano de ${ano} não é Bisexto`);
}
