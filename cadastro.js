const readline = require('readline-sync');

let tarefas = [];

// Função principal que mostra o menu e permite ao usuário escolher uma opção
function menu() {
    console.log("                                                           ");
    console.log("                                                           ");
    console.log(" ========= FAP - FORMACAO ACELERADA DE PROGRAMACAO ========");
    console.log(" === PROFESSOR: ANDRE RIBEIRO / DISCIPLINA: JAVA SCRIPT ===");
    console.log(" ========= S.C.T. -> SISTEMA DE CADASTRO DE TAREFAS =======");
    console.log(" ============ ESCOLHA UMA OPCAO VALIDA (1 à 4): ===========");
    console.log("                                                           ");
    console.log("1 - Incluir Tarefa");
    console.log("2 - Alterar Tarefa");
    console.log("3 - Remover Tarefa");
    console.log("4 - Listar Tarefas");
    console.log("0 - Sair");

    let opcaomenu = parseInt(readline.question("Qual a opção desejada? "));

    switch (opcaomenu) {
        case 1:
            incluir();
            break;
        case 2:
            alterar();
            break;
        case 3:
            remover();
            break;
        case 4:
            listar();
            break;
        case 0:
                console.log("Saida realizada com Sucesso");
                return;
        default:
                console.log("Opcao inválida. Escolha outra opção.");
                break;
        }
    
        
        menu();// Chama o menu novamente para nova escolha do usuário
    }



//=============================== FUNÇÕES =================================//
// Função para incluir uma nova tarefa 
function incluir() {
    let descricao = readline.question("Qual tarefa deseja incluir? ");
    tarefas.push(descricao);
    console.log(`Tarefa "${descricao}" incluída com sucesso.`);
}

// Função para alterar a descrição de uma tarefa 
function alterar() {
    if (tarefas.length === 0) {
        console.log("A lista de tarefas está vazia. Nao há tarefas para alterar.");
        return;
    }

    console.log("Lista Atual de Tarefas:");
    listar(); // Chama a função listar para mostrar as tarefas com suas posições

    let posicao = parseInt(readline.question("Indique a posicao da tarefa que deseja alterar: "));
    if (posicao >= 0 && posicao < tarefas.length) {
        let novaDescricao = readline.question("Informe a nova descrição da tarefa: ");
        tarefas[posicao] = novaDescricao;
        console.log(`Tarefa na posição ${posicao} alterada para: ${novaDescricao}`);
    } else {
        console.log("Posição inválida. Escolha outra posiçao.");
    }
}


// Função para remover uma tarefa da lista incluída anteriormente
function remover() {
    if (tarefas.length === 0) {
        console.log("A lista de tarefas está vazia. Não há tarefas para remover.");
        return;
    }

    console.log("================ Lista Atual de Tarefas: ================");
    listar(); // Chama a função listar para mostrar as tarefas com suas respectivas posições

    let posicao = parseInt(readline.question("Indique a posição da tarefa que deseja remover: "));
    if (posicao >= 0 && posicao < tarefas.length) {
        let tarefaRemover = tarefas.splice(posicao, 1)[0];
        console.log(`Tarefa removida com sucesso: ${tarefaRemover}`);
    } else {
        console.log("Posicao inválida. Escolha outra posição.");
    }
}

// Função para listar as tarefas
function listar() {
    if (tarefas.length === 0) {
        console.log("A Lista de tarefas está vazia, não há nenhuma tarefa para listar. Escolha outra opçâo:");
    } else {
        let ordem_alfabetica = parseInt(readline.question("Deseja ordenar por ordem alfabetica? 1-SIM / 2-NÃO: "));

          if (ordem_alfabetica === 1) {
            tarefas.sort();
            console.log("======== Listagem atualizada das tarefas - Por ordem alfabética ========");
        } else if (ordem_alfabetica === 2) {
            console.log("======== Listagem atualizada das tarefas - Por ordem de posição ========");
        } else {
            console.log("Opção inválida. Escolha 1 ou 2.");
            return;
        }

        for (let i = 0; i < tarefas.length; i++) {
            console.log(`Posição ${i}: ${tarefas[i]}`);
        }
    }
}

menu(); //Chama a função menu principal para nova escolha do usuário
