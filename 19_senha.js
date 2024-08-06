//Ler o nome do usuario e a senha e não aceite a senha igual ao nome do usuário
// monstrando a mensagem de erro e voltando a pedir as informações

const readline = require('readline-sync');

function informacoes() {
    let usuario = readline.question("Informe o nome do Usuario: ");
    let senha = readline.question("Informe a senha: ");

    while (senha === usuario) {
        console.log("Erro: Senha não pode ser igual ao nome de usuário.");
        senha = readline.question("Escolha outra senha: ");
    }

    console.log(`Cadastro do Usuário ${usuario}, realizado com sucesso.`);
}

informacoes();






