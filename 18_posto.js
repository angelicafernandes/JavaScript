const readline = require('readline-sync');

let valor = 0;
let litros = 0;
let combustivel = 0;

function menu() {
    console.log("============== POSTO DE GASOLINA ===============\n");
    console.log("================ Menu principal ================\n");
    console.log("(A) - Alcool");
    console.log("(G) - Gasolina");
    console.log("(S) - Sair");
}

do {
    menu();
    let combustivel = readline.question("Escolha uma Opcao: ");

    switch (combustivel) {
        case "A":
            alcool();
            console.log(`O valor a ser pago sera de R$ ${valor.toFixed(2)}, referente a ${litros} litros de Alcool.`);
            break;
        case "G":
            gasolina();
            console.log(`O valor a ser pago sera de R$ ${valor.toFixed(2)}, referente a ${litros} litros de Gasolina.`);
            break;
        case "S":
            console.log("Saida realizada com sucesso.");
            return;
        default:
            console.log("Opcao invalida, escolha outra opcao.");
            break;
    }
} while (combustivel !== "S");

// Função para calcular o valor do Álcool
function alcool() {
    litros = parseFloat(readline.question("Informe a quantidade de litros de Alcool vendidos: "));
    if (litros <= 20) {
        valor = (litros * 1.90) * 0.97;
    } else {
        valor = (litros * 1.90) * 0.95;
    }
}

// Função para calcular o valor da Gasolina
function gasolina() {
    litros = parseFloat(readline.question("Informe a quantidade de litros de Gasolina vendidos: "));
    if (litros <= 20) {
        valor = (litros * 2.50) * 0.96;
    } else {
        valor = (litros * 2.50) * 0.94;
    }
}
