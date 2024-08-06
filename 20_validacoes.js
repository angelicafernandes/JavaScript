
const readline = require('readline-sync');

let nome, idade, salario, sexo, estado_civil,dados;

function menu() {
    console.log("==================== CADASTRO ======================");
    console.log("========= Regras para Inclusão dos Dados: ==========\n");
    console.log("1 - Nome: Mais que 3 caracteres");
    console.log("2 - Idade: Entre 0 e 150 anos");
    console.log("3 - Salário: Maior que 0");
    console.log("4 - Sexo: f (feminino) / m (masculino)");
    console.log("5 - Estado Civil: s(solteiro) /c(casado) /v(viúvo) /d(divorciado)");
    console.log("0 - Sair\n");
}


   menu();
do {
   
    let dados = parseInt(readline.question("Escolha uma opcao de 0 a 5: "));

    switch(dados) {
        case 1: 
            nome = readline.question("Qual seu nome? ");
            while (nome.length <= 3) {
                console.log("Erro: Observe as regras, o nome tem que ser maior do que 3 caracteres.");
            }
            
            break;

        case 2:     
            idade = parseInt(readline.question("Qual a sua idade? "));
            while (idade < 0 || idade > 150) {
                console.log("Erro: Observe as regras, a idade tem que estar entre 0 e 150 anos.");
             
            }
            break;

        case 3: 
            salario = parseFloat(readline.question("Informe o salário: "));
            while (salario <= 0) {
                console.log("Erro: Observe as regras, o salário tem que ser maior do que Zero.");
            }
            break;

        case 4: 
            sexo = readline.question("Qual seu sexo? (f/m) ");
            while (sexo !== 'f' && sexo !== 'm') {
                console.log("Erro: Observe as regras, escolha (f) ou (m) para Sexo.");
            }
            break;

        case 5: 
            estado_civil = readline.question("Qual seu Estado Civil? (s/c/v/d) ");
            while (estado_civil !== 's' && estado_civil !== 'c' && estado_civil !== 'v' && estado_civil !== 'd') {
                console.log("Erro: Observe as regras, para Estado Civil, escolha: s, c, v ou d.");
            }
            break;

        case 0: 
            console.log("Saída realizada com sucesso.");
            return;
        default:
            console.log("Opção inválida! Por favor, escolha uma opção entre 0 e 5.");
            break;
    }
    menu();
} while (dados != 0); 
