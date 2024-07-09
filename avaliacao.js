//SISTEMA PARA CALCULAR A SOMA DE DOIS NÚMEROS
readline = require('readline-sync');

escolha();         
      

//====================================FUNÇÃO DO MENU INICIAL
function  escolha(opcao) {  
console.log("ESCOLHA SUA OPCAO");
console.log("1-SOMAR");
console.log("0-SAIR");
}

let opcao = parseInt(readline.question("Qual a sua opcao? "));

while (opcao != 0 && opcao != 1) {
    console.log("OPCAO INVALIDA, ESCOLHA OUTRA OPCAO");
    opcao = parseInt(readline.question("Qual a sua opcao? "));
    escolha();
}
if (opcao === 0) {
        sair();
}
else
    while (opcao === 1) {
    soma();
    escolha();
}

//====================================FUNÇÃO SOMAR
function soma() {
    let continuar = 1;
    while (continuar === 1 ) {
    let n1 = parseInt(readline.question("Qual o primeiro numero? "));
    let n2 = parseInt(readline.question("Qual o segundo numero? "));
    let resultado = (n1+n2);
    console.log(`Seus numeros escolhidos foram: ${n1} e ${n2}, totalizando a soma de:, ${resultado}`);
    let continuar = parseInt(readline.question("Digite (1) para realizar outra soma ou (0) para sair: "));
    
    while (continuar != 0 && continuar != 1) {
        console.log("OPCAO INVALIDA, ESCOLHA OUTRA OPCAO");
        continuar = parseInt(readline.question("Digite (1) para realizar outra soma ou (0) para sair: "));
        escolha();
}   
    if (continuar === 0) {
    sair();
}
    while (continuar === 1) {
    soma();
    escolha();
}
}
}


//====================================FUNÇÃO SAIR
function sair() {
    console.log("SAIDA REALIZADA COM SUCESSO");
    process.exit(0)// Forçar sair 
}
