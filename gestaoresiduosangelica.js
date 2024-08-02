
const readline = require('readline-sync');

// Declaração das listas
let organizacao = [];
let evento = [];

// Função principal que mostra o menu e permite ao usuário escolher se vai usar o MENU Organização ou o MENU Evento
function menu() {
    console.clear();
    console.log("\n === FAP - FORMACAO ACELERADA DE PROGRAMACAO =====  PROF.:ANDRE RIBEIRO/DISCIPLINA:JAVA SCRIPT ===");
    console.log(" SISTEMA  DE  IMPLEMENTAÇÃO  DE  ESTRATÉGIAS  DE GESTÃO  DE  RESÍDUOS EM GRANDES  EVENTOS PÚBLICOS ");
    console.log(" \n MENU PRINCIPAL  ************ RESÍDUOS ORGÂNICOS, RECICLÁVEIS  E  NÃO-RECICLÁVEIS ************** ");
    console.log(" OBJETIVO: cadastrar, consultar, alterar  e  remover (CRUD) - Organizações  e  Eventos  vinculados");
    console.log("\n =============================   ESCOLHA UMA OPÇÃO VÁLIDA (0 à 2):   ============================= \n");
    console.log("1 - MENU Organização");
    console.log("2 - MENU Evento");
    console.log("0 - Sair");

    let opcaomenu = parseInt(readline.questionInt("\n Qual a opção desejada? "));

    switch (opcaomenu) {
        case 1:
            console.clear();
            menu_organizacao();
            break;
        case 2:
            console.clear();
            menu_evento();
            break;
        case 0:
            console.log("Saída realizada com sucesso");
            return;
        default:
            console.log("Opção inválida. Escolha outra opção.");
            break;
    }
    menu(); // Chama o menu novamente para nova escolha do usuário
}

//=========================================================================== O R G A N I Z A Ç Ã O
// Menu principal da organização
function menu_organizacao() {
    console.log(" SISTEMA DE IMPLEMENTAÇÃO DE ESTRATÉGIAS DE GESTÃO DE RESÍDUOS EM GRANDES EVENTOS PÚBLICOS ");
    console.log("\n MENU ORGANIZAÇÃO: Incluir, Alterar, Remover ou Listar");
    console.log("  ==========   ESCOLHA UMA OPÇÃO VÁLIDA (0 à 4):   ========= \n");
    console.log("1 - Incluir");
    console.log("2 - Alterar");
    console.log("3 - Remover");
    console.log("4 - Listar");
    console.log("0 - Voltar ao Menu Principal");

    let opcao_organizacao = parseInt(readline.questionInt("\n Qual a opção desejada? "));

    switch (opcao_organizacao) {
        case 1:
            incluir_org();
            break;
        case 2:
            alterar_org();
            break;
        case 3:
            remover_org();
            break;
        case 4:
            listar_org();
            break;
        case 0:
            console.log("Saída realizada com sucesso");
            return;
        default:
            console.log("Opção inválida. Escolha outra opção.");
            break;
    }
    menu_organizacao(); // Chama o menu novamente para nova escolha do usuário
}

// Função para incluir uma organização
function incluir_org() {
    let id_org_incluir = readline.questionInt("ID: ");

    // Verificação se o ID já está cadastrado
    for (let i = 0; i < organizacao.length; i++) {
        if (organizacao[i].id === id_org_incluir) {
            console.log("ID de Organização já cadastrado, favor digitar outro ID.");
            return; // Encerra a função se o ID já estiver cadastrado
        }
    }

    // Se o ID não estiver cadastrado, coleta os demais dados e adiciona a organização
    let cnpj = readline.question("CNPJ: ");
    let razao_social = readline.question("Razão Social: ");
    let nome_fantasia = readline.question("Nome Fantasia: ");
    let email = readline.question("Email: ");
    let endereco = readline.question("Endereço: ");
    let telefone = readline.question("Telefone: ");

    // Adiciona a nova organização à lista
    organizacao.push({
        id: id_org_incluir, // Usa 'id' para o ID da organização
        cnpj: cnpj,
        razao_social: razao_social,
        nome_fantasia: nome_fantasia,
        email: email,
        endereco: endereco,
        telefone: telefone
    });

    console.log("Organização incluída com sucesso.");
}

// Função para alterar uma organização
function alterar_org() {
    if (organizacao.length === 0) {
        console.log("A lista de organizações está vazia. Não há organizações para alterar.");
        return;
    }

    console.log("Lista Atual de Organizações Cadastradas:");
    listar_org(); // Mostra as organizações para o usuário selecionar 

    let id_org_alterar = readline.questionInt("Indique o ID da Organização que deseja alterar: ");
   
    // Encontra a organização pelo ID
    let org = organizacao.find(org => org.id === id_org_alterar);
    
    if (org) {
        console.log("Altere ou tecle ENTER para manter o atual");

        // Solicita novas informações e usa os valores atuais se o usuário pressionar ENTER
        let novo_cnpj = readline.question(`Informe novo CNPJ (atual: ${org.cnpj}): `) || org.cnpj;
        let nova_razao_social = readline.question(`Informe nova Razão Social (atual: ${org.razao_social}): `) || org.razao_social;
        let novo_email = readline.question(`Informe novo Email (atual: ${org.email}): `) || org.email;
        let novo_nome_fantasia = readline.question(`Informe novo Nome de Fantasia (atual: ${org.nome_fantasia}): `) || org.nome_fantasia;
        let novo_endereco = readline.question(`Informe novo Endereço (atual: ${org.endereco}): `) || org.endereco;
        let novo_telefone = readline.questionInt(`Informe novo Telefone (atual: ${org.telefone}): `) || org.telefone;

        // Atualiza as informações da organização
        Object.assign(org, {
            cnpj: novo_cnpj,
            razao_social: nova_razao_social,
            email: novo_email,
            nome_fantasia: novo_nome_fantasia,
            endereco: novo_endereco,
            telefone: novo_telefone
        });

        console.log("Organização alterada com sucesso.");
    } else {
        console.log("Organização não encontrada.");
    }
}

// Função para remover uma organização
function remover_org() {
    if (organizacao.length === 0) {
        console.log("A lista de organizações está vazia. Não há organizações para remover.");
        return;
    }

    listar_org(); // Mostra as organizações para o usuário selecionar

    // Solicita o ID da organização a ser removida
    let id_org_remover = readline.questionInt("Indique o ID da organização que deseja remover: ");

    // Encontra o índice da organização com o ID fornecido
    let index = organizacao.findIndex(org => org.id === id_org_remover);

    if (index !== -1) {
        // Remove a organização do array
        let [org_removida] = organizacao.splice(index, 1);
        console.log(`Organização removida com sucesso: ID: ${org_removida.id}, CNPJ: ${org_removida.cnpj}, Razão Social: ${org_removida.razao_social}, Nome Fantasia: ${org_removida.nome_fantasia}, Email: ${org_removida.email}, Endereço: ${org_removida.endereco}, Telefone: ${org_removida.telefone}`);
    } else {
        console.log("Organização não encontrada.");
    }
}

// Função para listar todas as organizações
function listar_org() {
    // Verifica se a lista de organizações está vazia
    if (organizacao.length === 0) {
        console.log("A lista de organizações está vazia.");
        return; // Sai da função se a lista estiver vazia
    }

    console.log("\nLista Atual de Organizações:");

    // Itera sobre a lista de organizações e exibe os detalhes
    organizacao.forEach((org, index) => {
        console.log(`${index}: ID: ${org.id}, CNPJ: ${org.cnpj}, Razão Social: ${org.razao_social}, Nome Fantasia: ${org.nome_fantasia}, Email: ${org.email}, Endereço: ${org.endereco}, Telefone: ${org.telefone}`);
    });
}

//=========================================================================== E V E N T O S
// Menu principal do Evento
function menu_evento() {
    console.log("\n SISTEMA DE IMPLEMENTAÇÃO DE ESTRATÉGIAS DE GESTÃO DE RESÍDUOS ");
    console.log("\n MENU EVENTO: Incluir, Alterar, Remover ou Listar  ===========");
    console.log(" ============   ESCOLHA UMA OPCAO VÁLIDA (0 à 4):   ========== \n");
    console.log("1 - Incluir");
    console.log("2 - Alterar");
    console.log("3 - Remover");
    console.log("4 - Listar ");
    console.log("0 - Voltar ao Menu Principal");

    let opcao_evento = parseInt(readline.questionInt("\n Qual a opcao desejada? "));

    switch (opcao_evento) {
        case 1:
            incluir_evento();
            break;
        case 2:
            alterar_evento();
            break;
        case 3:
            remover_evento();
            break;
        case 4:
            listar_evento();
            break;
        case 0:
            console.log("Saída realizada com sucesso");
            return;
        default:
            console.log("Opção inválida. Escolha outra opção.");
            break;
    }
    menu_evento(); // Chama o menu novamente para nova escolha do usuário
}


//MENU Incluir Eventos
function incluir_evento(){

    if (organizacao.length === 0) {
        console.log("A lista de organizações está vazia. Primeiro inclua uma Organização para vincular ao Evento.");
        return;
    }else {
  
    console.log(" SISTEMA DE IMPLEMENTAÇÃO DE ESTRATÉGIAS DE GESTÃO DE RESÍDUOS EM GRANDES EVENTOS PÚBLICOS ");
    console.log("  =============  TIPO DO EVENTO ***** ESCOLHA UMA OPCAO VALIDA (0 A 12):   =========== ");
    console.log(" 1  - Eventos Culturais: Festivais de Música, Concertos, festivais de música ao ar livre, shows de bandas locais e internacionais.Teatros e Performances: Espetáculos teatrais, apresentações de dança, óperas. Exposições de Arte: Mostras de pintura, escultura, fotografia, arte contemporânea.Feiras de Cultura: Eventos que celebram a cultura e tradições locais, com exposições e apresentações.");
    console.log(" 2  - Eventos Esportivos: Competições e Torneios: Jogos olímpicos, campeonatos de esportes, torneios de futebol, corridas.Eventos de Corrida: Maratonas, corridas de rua, triatlos.Competições de Esportes Radicais: Skateboarding, escalada, esportes aquáticos.");
    console.log(" 3  - Eventos Educacionais: Seminários, Conferências, Palestras acadêmicas, workshops, simpósios.Feiras de Educação: Eventos para promover instituições de ensino e cursos.Cursos e Oficinas: Aulas e treinamentos sobre diversas áreas de interesse.");
    console.log(" 4  - Eventos Comunitários:Feiras e Festas Locais: Festas de bairro, feiras de agricultores, mercados de rua.Eventos de Voluntariado: Limpeza de áreas públicas, plantio de árvores, arrecadação de alimentos. Reuniões Comunitárias: Encontros para discussão de questões locais e planejamento comunitário.");
    console.log(" 5  - Eventos Políticos e Governamentais: Comícios e Protestos: Manifestações políticas, discursos de candidatos.Solenidades Oficiais: Cerimônias de posse, inaugurações de obras públicas.Debates Públicos: Discussões sobre políticas públicas e questões importantes para a sociedade.");  
    console.log(" 6  - Eventos Religiosos: Cultos e Missas: Celebrações religiosas em igrejas, sinagogas, mesquitas.Festividades Religiosas: Celebrações de datas importantes como Páscoa, Natal, Ramadã.Peregrinações: Viagens a locais sagrados ou eventos de adoração em massa.");
    console.log(" 7  - Eventos Corporativos: Lançamentos de Produtos: Apresentação de novos produtos ou serviços.Reuniões e Convenções: Encontros de negócios, conferências corporativas. Treinamentos e Workshops: Sessões de formação e desenvolvimento profissional.");
    console.log(" 8  - Eventos Entretedimento: Feiras e Exposições: Exposições de tecnologia, eventos de consumo de massa.Eventos de Moda: Desfiles de moda, exposições de roupas e acessórios. Competições e Jogos: Competições de e-sports, eventos de jogos de tabuleiro.");
    console.log(" 9  - Eventos Saúde e Bem-Estar: Feiras de Saúde: Eventos sobre saúde e bem-estar, com estandes de serviços e produtos.Eventos de Fitness: Aulas de yoga ao ar livre, maratonas de fitness.Campanhas de Conscientização: Eventos para promover a saúde mental, prevenção de doenças.");
    console.log(" 10 - Eventos Natureza e Meio Ambiente: Palestras Ambientais: Encontros sobre conservação e sustentabilidade.Limpeza de Praias e Parques: Eventos de voluntariado para limpar áreas naturais.Feiras de Sustentabilidade: Eventos para promover práticas ecológicas e produtos sustentáveis.");
    console.log(" 11 - Eventos Infantis e Familiares: Festinhas de Aniversário: Crianças, pais, familiares e amigos.Feiras Infantis: Pais, crianças, educadores, profissionais de desenvolvimento infantil. Atividades ao Ar Livre: Famílias, crianças, grupos de escolas, comunidades locais.");
    console.log(" 12 - Eventos Natureza e Meio AmbientePalestras Ambientais: Ambientalistas, estudantes, membros de ONGs, cidadãos interessados em questões ambientais. Limpeza de Praias e Parques: Voluntários, residentes locais, grupos ambientais.Feiras de Sustentabilidade: Profissionais de sustentabilidade, consumidores conscientes, empresas verdes.");
    console.log(" 0  - Sair");

    // Verificação se o ID do Evento já está cadastrado
    let id_evento = parseInt(readline.questionInt("\n Qual o ID do Evento "));
    for (let i = 0; i < evento.length; i++) {
    if (evento[i].id === id_evento_incluir) {
        console.log("ID de Evento já cadastrado, favor digitar outro ID.");
        return; // Encerra a função se o ID já estiver cadastrado
    }
}

    // Se o ID da AORGANIZAÇÃO estiver cadastrado, vincula o evento à ORGANIZAÇÃO, coleta os demais dados do Evento e adiciona o Evento
    let evento_id_org = readline.questionInt("ID da organizacao Responsavel: ");
      
       for (let i = 0; i < organizacao.length; i++) {
        if (evento_id_org = id_org_incluir){
            let empresa_responsavel = cnpj;
            let razaoempresa_responsavel = razao_social;
            return; // Encerra a função 
    }
   
    let tipodoevento = parseInt(readline.questionInt("\n Qual o tipo do Evento (Escolha uma OPCAO de 0 a 12)? "));
    let responsavel = readline.question("Nome do Responsavel:   ");    
    let local_evento = readline.question("Local:   ");
    let data_evento = readline.questionInt("Data:(YYYY-MM-DD)   ");
    let hora_evento = readline.questionInt("Hora(HH:MM):   ");
    let duracao_evento = readline.questionInt("Duracao em horas:    ");
    let expectativa_pessoas = readline.questionInt("Expectativa de Pessoas:   ");
    let organico = (duracao_evento * 0,150 * expectativa_pessoas);
    let reciclavel = (duracao_evento * 0,200 * expectativa_pessoas);
    let nao_reciclavel =  (duracao_evento * 0,100 * expectativa_pessoas);
    let residuo = (organico + reciclavel + nao_reciclavel);
    let lixeira = (expectativa_pessoas/50);
 
 
 
    switch (tipodoevento) {

        case 1:
            console.log("Público Alvo:fãs de música, turistas, moradores locais,Apreciadores de arte, estudantes de artes, famílias, comunidade local, Amantes da arte, colecionadores, estudantes de arte, público geral, Residentes locais, turistas, famílias, grupos culturais e comunitários");
            let publico_alvo1 = "fãs de música, turistas, moradores locais,Apreciadores de arte, estudantes de artes, famílias, comunidade local, Amantes da arte, colecionadores, estudantes de arte, público geral, Residentes locais, turistas, famílias, grupos culturais e comunitários";
            evento.push({id_org_incluir, cnpj, razao_social, id_evento, tipo_evento, publico_alvo1, responsavel_evento, local_evento, data_evento, hora_evento, duracao_evento, expectativa_pessoas, residuo, lixeira, evento_id_org });
            console.log("Evento incluído com sucesso.");
            break;
        case 2:
            let publico_alvo2 = "Fãs de esportes, atletas, comunidades locais, grupos de amigos, Corredores amadores e profissionais, entusiastas de fitness, apoiadores de causas sociais. Competições de Esportes Radicais: Jovens, praticantes de esportes radicais, entusiastas de atividades extremas";
            evento.push({id_org_incluir, cnpj, razao_social, id_evento, tipo_evento, publico_alvo2, responsavel_evento, local_evento, data_evento, hora_evento, duracao_evento, expectativa_pessoas, residuo_evento, evento_id_org });
            console.log("Evento incluído com sucesso.");
            break;
        case 3:
            let publico_alvo3 = "Seminários e Conferências: Profissionais, acadêmicos, estudantes, interessados em tópicos específicos. Estudantes, pais, educadores, profissionais de orientação educacional.Cursos e Workshops: Pessoas interessadas em desenvolvimento pessoal, estudantes, profissionais em busca de novas habilidades.";            
            evento.push({id_org_incluir, cnpj, razao_social, id_evento, tipo_evento, publico_alvo3, responsavel_evento, local_evento, data_evento, hora_evento, duracao_evento, expectativa_pessoas, residuo_evento, evento_id_org });
            console.log("Evento incluído com sucesso.");
            break;
        case 4:
            let publico_alvo4 = "Residentes da comunidade, famílias, grupos de amigos, pequenos empresários locais, Voluntários, moradores preocupados com a comunidade, grupos cívicos.Reuniões Comunitárias: Residentes locais, líderes comunitários, grupos de interesse local.";
            evento.push({id_org_incluir, cnpj, razao_social, id_evento, tipo_evento, publico_alvo4, responsavel_evento, local_evento, data_evento, hora_evento, duracao_evento, expectativa_pessoas, residuo_evento, evento_id_org });
            console.log("Evento incluído com sucesso.");
            break;
        case 5:
            let publico_alvo5 = "Eleitores, membros de partidos políticos, ativistas, cidadãos interessados em causas políticas, Cidadãos locais, dignitários, autoridades governamentais, imprensa.Debates Públicos: Cidadãos interessados em políticas, especialistas, acadêmicos, jornalistas.";
            evento.push({id_org_incluir, cnpj, razao_social, id_evento, tipo_evento, publico_alvo5, responsavel_evento, local_evento, data_evento, hora_evento, duracao_evento, expectativa_pessoas, residuo_evento, evento_id_org });
            console.log("Evento incluído com sucesso.");
            break;
        case 6:
            let publico_alvo6 = "Membros da congregação, líderes religiosos, visitantes.Festividades, Membros da comunidade religiosa, famílias, turistas religiosos.Peregrinações: Fiéis de diversas regiões, grupos religiosos organizados.";
            evento.push({id_org_incluir, cnpj, razao_social, id_evento, tipo_evento, publico_alvo6, responsavel_evento, local_evento, data_evento, hora_evento, duracao_evento, expectativa_pessoas, residuo_evento, evento_id_org });
            console.log("Evento incluído com sucesso.");
            break;
        case 7:
            let publico_alvo7 = "Clientes potenciais, parceiros de negócios, imprensa, investidores, Funcionarios, executivos, parceiros de negócios, clientes. Treinamentos e Workshops: Funcionarios da empresa, profissionais da área específica, estudantes.;"
            evento.push({id_org_incluir, cnpj, razao_social, id_evento, tipo_evento, publico_alvo7, responsavel_evento, local_evento, data_evento, hora_evento, duracao_evento, expectativa_pessoas, residuo_evento, evento_id_org });
            console.log("Evento incluído com sucesso.");
            break;
        case 8:
            let publico_alvo8 = "Consumidores, entusiastas de produtos específicos, profissionais da indústria, Profissionais da moda, jornalistas, influenciadores, público geral interessado em moda. Competições e Jogos: Participantes de e-sports, fãs de jogos, jogadores casuais e profissionais.";
            evento.push({id_org_incluir, cnpj, razao_social, id_evento, tipo_evento, publico_alvo8, responsavel_evento, local_evento, data_evento, hora_evento, duracao_evento, expectativa_pessoas, residuo_evento, evento_id_org });
            console.log("Evento incluído com sucesso.");
            break;
        case 9:
            let publico_alvo9 = "Profissionais de saúde, pacientes, interessados em bem-estar, comunidade geral, Entusiastas de fitness, atletas, membros de academias, famílias, Público em geral, grupos de apoio, profissionais da saúde.";
            evento.push({id_org_incluir, cnpj, razao_social, id_evento, tipo_evento, publico_alvo9, responsavel_evento, local_evento, data_evento, hora_evento, duracao_evento, expectativa_pessoas, residuo_evento, evento_id_org });
            console.log("Evento incluído com sucesso.");
            break;
        case 10:
            let publico_alvo11  = "Ambientalistas, estudantes, membros de ONGs, cidadãos interessados em questões ambientais, Voluntários, residentes locais, grupos ambientais, Profissionais de sustentabilidade, consumidores conscientes, empresas verdes.";
            evento.push({id_org_incluir, cnpj, razao_social, id_evento, tipo_evento, publico_alvo10, responsavel_evento, local_evento, data_evento, hora_evento, duracao_evento, expectativa_pessoas, residuo_evento, evento_id_org });
            console.log("Evento incluído com sucesso.");
            break;
        case 11:
            let publico_alvo12 = "Crianças, pais, familiares e amigos, Pais, crianças, educadores, profissionais de desenvolvimento infantil,Famílias, crianças, grupos escolares, comunidades locais.";
            evento.push({id_org_incluir, cnpj, razao_social, id_evento, tipo_evento, publico_alvo11, responsavel_evento, local_evento, data_evento, hora_evento, duracao_evento, expectativa_pessoas, residuo_evento, evento_id_org });
            console.log("Evento incluído com sucesso.");
            break;
        case 12:
            let publico_alvo13 ="Profissionais e Especialistas Voluntários e Ativistas Comunidade Local, Organizações e Empresas, Mídia e Comunicadores.";
            evento.push({id_org_incluir, cnpj, razao_social, id_evento, tipo_evento, publico_alvo12, responsavel_evento, local_evento, data_evento, hora_evento, duracao_evento, expectativa_pessoas, residuo_evento, evento_id_org });
            console.log("Evento incluído com sucesso.");
            break;
        case 0:
            console.log("Saída realizada com sucesso");
            return;
        default:
            console.log("Opção inválida. Escolha outra opção.");
            break;
    }
   

   console.log("Evento incluído com sucesso.");
}
}
    
menu(); // Chama o menu novamente para nova escolha do usuário

}

//Função para alterar um evento

function alterar_evento() {
    if (evento.length === 0) {
        console.log("A lista de eventos está vazia. Não há eventos para alterar.");
        return;
    }
    listar_evento(); // Mostra os eventos para seleção
    
    let id_evento_alterar = readline.question("Indique o ID do Evento que deseja alterar: ");
    
    if (posicao >= 0 && posicao < tarefas.length) {
        let novaDescricao = readline.question("Informe a nova descrição da tarefa: ");
    let evt = evento.find(evt => evt.id_evento === id_evento_alterar);
    }if (evt) {
        tipo_evento = readline.questionInt(`Altere o Tipo do Evento ${evt.tipo_evento}) ou tecle enter para manter o atual: `);
        descricao_evento = readline.question(`Altere a Descrição do Evento ${evt.descricao_evento}) ou tecle enter para manter o atual: `);
        publicoalvo_evento = readline.question(`Altere o Público Alvo ${evt.publicoalvo_evento}) ou tecle enter para manter o atual: `);
        expectativa_pessoas = readline.questionInt(`Altere a Expectativa de Pessoas ${evt.expectativa_pessoas}) ou tecle enter para manter o atual: `);
        objetivo_evento = readline.question(`Altere o Objetivo do Evento ${evt.objetivo_evento}) ou tecle enter para manter o atual: `);
        local_evento = readline.question(`Altere o Local do Evento ${evt.local_evento}) ou tecle enter para manter o atual: `);
        data_evento = readline.questionInt(`Altere a Data do Evento ${evt.data_evento}) ou tecle enter para manter o atual: `);
        hora_evento = readline.questionInt(`Altere a Hora do Evento ${evt.hora_evento}) ou tecle enter para manter o atual: `);
        feedback_evento = readline.question(`Altere o Feedback do Evento ${evt.feedback_evento}) ou tecle enter para manter o atual: `);
        obs_evento = readline.question(`Altere as Observações do Evento ${evt.obs_evento}) ou tecle enter para manter o atual: `);
       // evt.residuo_evento = readline.question(`Informe o Resíduo do Evento (atual: ${evt.residuo_evento}) ou tecle enter para manter o atual: `) || evt.residuo_evento;
        evento_id_org = readline.questionInt(`Informe o ID da Organização Vinculada (atual: ${evt.evento_id_org}) ou tecle enter para manter o atual: `);

        console.log("Evento alterado com sucesso.");
    } else {
        console.log("Evento não encontrado.");
    }


}


// Função para remover um evento
    if (evento.length === 0) {
        console.log("A lista de eventos está vazia. Não há eventos para remover.");
        return;
    }
    listar_evento(); // Mostra os eventos para seleção

    let id_evento_remover = readline.question("Indique o ID do Evento que deseja remover: ");
    let index = evento.findIndex(evt => evt.id_evento === id_evento_remover);
    if (index !== -1) {
        evento.splice(index, 1);
        console.log("Evento removido com sucesso.");
    } else {
        console.log("Evento não encontrado.");
    }

// Função para listar todos os eventos
function listar_evento() {
    if (evento.length === 0) {
        console.log("A lista de eventos está vazia.");
        return;
    }
    console.log("Lista Atual de Eventos:");
    evento.forEach((evt, index) => {
        console.log(`${index}: ID: ${evt.id_evento}, Tipo: ${evt.tipo_evento}, Descrição: ${evt.descricao_evento}; Público Alvo: ${evt.publicoalvo_evento}; CNPJ: ${org.cnpj}, Razão Social: ${org.razao_social}; Expectativa de Pessoas: ${evt.expectativa_pessoas}; Objetivo: ${evt.objetivo_evento}; Responsável: ${evt.responsavel_evento}; Local: ${evt.local_evento}; Data: ${evt.data_evento}; Hora: ${evt.hora_evento}; Feedback: ${evt.feedback_evento}; Observações: ${evt.obs_evento}; Resíduo: ${evt.residuo_evento}`);
    });
}

// Inicia o menu
menu();


