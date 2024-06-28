const readline = require('readline-sync');
let n1;
let n2;
let opcao;

// ======================================== MENU PRINCIPAL DA CALCULADORA
menu()// Chamada inicial para iniciar o programa
function menu() {
  console.log("========= CALCULADORA (SOMAR SUBTRAIR MULTIPLICAR DIVIDIR) =========");
  console.log("                        ESCOLHA UMA OPCAO VALIDA(1 à 4):             ");
  console.log("1 - Soma");
  console.log("2 - Subtração");
  console.log("3 - Multiplicação");
  console.log("4 - Divisão");
  console.log("0 - Sair");

  opcao = parseInt(readline.question("Qual a operacao a ser realizada? "));

  if (opcao === 0)  {
     console.log("OBRIGADA POR USAR A CALCULADORA");
     console.log("SAÍDA REALIZADA COM SUCESSO");  
  }  else if (opcao > 4) {
     console.log("OPÇAO INVÁLIDA. ESCOLHA OUTRA OPÇÃO: ");
     menu(); //Chamar o menu novamente
  } else { 
     dec();
     calc(opcao, n1, n2);
  }
}

// ======================================== FUNÇÃO DECLARAÇÃO DAS VARIÁEIS
function dec()  {
  n1 = parseInt(readline.question("Qual o primeiro Numero? "));
  n2 = parseInt(readline.question("Qual o segundo Numero? "));
}

// ======================================== FUNÇÃO PARA CALCULAR AS OPERAÇÕES
function calc(opcao, n1, n2) {
  if (opcao === 1) {
    soma(n1, n2);
  } else if (opcao === 2) {
    sub(n1, n2);
  } else if (opcao === 3) {
    mult(n1, n2);
  } else if (opcao === 4) {
    div(n1, n2);
  } else {
    console.log("Opção inválida.");
  }
  
  console.log("OBRIGADA POR USAR A CALCULADORA");
  console.log("SAÍDA REALIZADA COM SUCESSO");
}

// ======================================== CÁLCULO DAS OPERAÇÕES

// SOMAR(n1, n2):
function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log("A soma dos números é:", resultado);
}

// SUBTRAIR(n1, n2):
function sub(n1, n2) {
  let resultado = n1 - n2;
  console.log("A subtração dos números é:", resultado);
}

// MULTIPLICAR(n1, n2):
function mult(n1, n2) {
  let resultado = n1 * n2;
  console.log("A multiplicação dos números é:", resultado);
}

// DIVIDIR(n1, n2):
function div(n1, n2) {
    let resultado = n1 / n2;
    console.log("A divisão dos números é:", resultado);
  }

