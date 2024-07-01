//PROGRAMA PARA EXIBIR A TABUADA DO NÚMERO INFORMADO PELO USUÁRIO

const readline = require('readline-sync');

//=============================================RECEBENDO O NÚMERO PARA EXECUTAR A TABUADA
let num = parseInt(readline.question(console.log("Digite qual tabuada você quer saber?   ")));

//=============================================FUNÇÃO DO CÁLCULO DA TABUADA
function tabnum (num)  {
    for (i = 0; i <= 10; i++) {
        let prod = (i * num);
        console.log(`${num} X ${i} = ${prod} `);
}
console.log("OBRIGADA POR USAR NOSSA TABUADA");
}
console.log(`A TABUADA DE ${num} é: `);
tabnum(num);//CHAMANDO A FUNÇÃO DA TABUADA