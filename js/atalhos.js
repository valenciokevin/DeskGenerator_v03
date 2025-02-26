const atalhos = {
    inicio: {
        camposObrigatorios: ['clientName', 'agentName'],
        texto:
`${clientName}, tudo bem?

Meu nome é ${agentName} e vou assumir seu atendimento. Estarei analisando as informações repassadas sobre sua solicitação.

Enquanto isso, você possui algum outro detalhe ou informação complementar para agilizar seu atendimento?`
    },

    canalParaFeedback: {
        camposObrigatorios: [clientName],
        texto:
`${clientName}, para uma comunicação mais eficiente, poderia me informar qual é o melhor canal de contato para fornecermos feedback sobre o chamado?
`
    },

    aguarde: {
        camposObrigatorios: [],
        texto:
`Aguarde um instante enquanto finalizo o registro de seu chamado.

Aproveitando, você já conhece nosso Portal de Chamados? Com ele você pode registrar e acompanhar as interações em tempo real em seus chamados, além de interagir diretamente com o analista responsável pela sua demanda.

Clique no link abaixo para conhecer e assistir a um vídeo com as instruções de utilização.
https://youtu.be/Kj2rrNoGftI?feature=shared

Gostaria de criar seu acesso ao nosso portal?`
    },

    portalDeChamados: {
    camposObrigatorios: [clientMail],
        texto:
`||*Obrigado por aguardar||*

Realizamos o seu cadastro com sucesso, em nosso sistema para abertura e controle de atendimento e atividades a sua empresa.

Abaixo segue seus dados de acesso:
*login* : ${clientName}
*senha* :

Você também irá receber essas informações no seu e-mail cadastrado!

*Acesso ao portal:* https://futurotec.desk.ms/?LoginPortal

*Acesse o nosso treinamento:* https://www.youtube.com/watch?v=TD0_Uwklsk4

Ficamos à disposição para quaisquer esclarecimentos ou dúvidas necessárias.
`
    },

    finalizacao1: {
        camposObrigatorios: [numeroChamado, slaPriority],
        texto:
`Obrigado por ter aguardado.
A sua solicitação já foi registrada e encaminhada para a equipe de analistas que vai atendê-la.

O número do chamado é ||*${numeroChamado}||*.
O SLA de solução é de ||*${slaPriority}||* horas úteis, podendo ser paralisado devido a fatores externos de terceiros.

Foi enviado também uma confirmação de abertura do chamado para o seu e-mail.
A medida que o chamado for recebendo interações, você receberá notificações por e-mail. Como combinado, também estaremos retornando feedbacks sobre o seu chamado através do CANAL_DE_CONTATO. Por gentileza se atente ao seu canal escolhido, que estaremos realizando contato através dos nossos canais oficiais de atendimento.

Quando o chamado for encerrado, você também receberá por e-mail uma pesquisa de satisfação para avaliar o atendimento recebido no chamado.

Algo mais em que podemos te ajudar?`
    },

    finalizacao2: {
        camposObrigatorios: [],
        texto:
`Ok, estou finalizando seu atendimento.

Em seguida, você será direcionado para algumas perguntas de avaliação do meu atendimento. Ficaremos felizes se puder responder.

A Futurotec agradece o seu contato, tenha um excelente dia!`
    },

    dados_cliente: {
        camposObrigatorios: [],
        texto:
`Já estou verificando a situação que você relatou.
Enquanto isso, pode me confirmar seu *e-mail* e *sobrenome* para registro do chamado?`
    },

    finalizacaoFCR: {
        camposObrigatorios: [numeroChamado],
        texto:
`Ok, estou finalizando seu atendimento.

Seu chamado foi registrado e concluído com o número ||*${numeroChamado}||*.
Em seguida, você será direcionado para algumas perguntas de avaliação do meu atendimento. Ficaremos felizes se puder responder.

A Futurotec agradece o seu contato, tenha um excelente dia!`
    },

    avisoInativo: {
        camposObrigatorios: [],
        texto:
`Em breve seu atendimento será finalizado por inatividade. Ainda está aí?`
    },

    finalizacaoInativo: {
        camposObrigatorios: [clientName],
        texto:
`Seu atendimento foi finalizado por inatividade!
Caso ainda precise de algum atendimento, basta entrar em contato conosco novamente!


A Futurotec agradece o seu contato!`
    },

    aplicativo: {
        camposObrigatorios: [],
        texto:
`*O Escallo App chegou!*

Com o Escallo App é possível:
Gerenciar os agentes do contact center
Editar filas de atendimento
Configurar datas de Feriados
Consultar valores ou contratar novas licenças, e muito mais.

Tenha todos esses recursos na palma das suas mãos! É simples e rápido.

*Para saber mais basta clicar no link abaixo:*
https://www.youtube.com/watch?v=6m2_Ldficac&list=PLZbfwX6NPyLPxSmXzuMv_eTle8lTnnbPC&index=1`
    },

    campanhaChat: {
        camposObrigatorios: [],
        texto:
`Prezado solicitante,
O atendimento desta demanda poderá incorrer em custos extras, dependendo da modalidade de serviço escolhida ou contratada. Deseja prosseguir mesmo assim?`
    },

    banimentoWBUS: {
        camposObrigatorios: [clientName],
        texto:
`Prezado(a) ${clientName}, bom dia.

O WhatsApp Business convencional está passando por alterações e atualizações constantes. Além de adicionar melhorias em sua plataforma, o WhatsApp busca inativar números de empresas que estejam em desacordo com sua política de uso.

O número XXXXXXXXXXX foi inativado pelo WhatsApp. Já estamos em contato para reativação dessa conta, mas infelizmente isto NÃO está sob nosso controle.

Anteriormente, a Meta (Facebook), dona do WhatsApp, realizava essas ações para tendenciar a utilização de canais oficiais.

Recentemente, essas ações foram intensificadas, pois foram lançadas alternativas mais viáveis para adesão a um canal oficial. Estas alternativas oficiais foram desenvolvidas pela Meta para envio e recebimento de mensagens de WhatsApp de empresas.

Importante ressaltar que o Escallo já possui integração com a Meta e consequentemente você pode aderir a uma das alternativas de canais oficiais que a Meta disponibiliza.

A Futurotec está constantemente evoluindo o Escallo para oferecer às empresas os canais mais assertivos para comunicação com seus clientes.

Caso o número seja reativado pelo WhatsApp, a recomendação é a migração para um desses novos modelos oficiais, visto que existe o risco de inativação definitiva do seu número por parte do WhatsApp. Esses modelos também oferecem mais privacidade, segurança e estabilidade.

Podemos entrar em contato para explicar melhor sobre as vantagens, desvantagens e o processo para essa migração?`
    },

    desbanWBUS: {
        camposObrigatorios: [],
        texto:
`Prezado ${clientName}, bom dia.

Sua conta foi reativada pelo WhatsApp e está pronta para ser integrada ao Escallo.

Conforme informamos no nosso contato anterior, existe o risco do WhatsApp inativar definitivamente seu número caso continue no WhatsApp Business convencional.

A recomendação é a migração do seu número para o WhatsApp Business API ou para o WhatsApp Business Cloud API,  visto que os mesmos oferecem mais privacidade, segurança e estabilidade.

Podemos entrar em contato para explicar melhor sobre as vantagens, desvantagens e o processo para essa migração?`
    },

    transferencia: {
        camposObrigatorios: [clientName],
        texto:
`${clientName}, precisarei me ausentar, por isso estou transferindo você para outro analista. As informações que alinhamos foram passadas para ele, que seguirá com o seu atendimento. Agradeço pela atenção até aqui.`
    },

    finalizacaoAtivos: {
        camposObrigatorios: [clientName, numeroChamado],
        texto:
`gradeço pelo tempo e atenção, ${clientName}!
Vou encerrar nossa conversa aqui pelo chat, seu chamado ${numeroChamado}, (permanece em verificação. / será finalizado.)

Qualquer dúvida, seguimos à disposição.
Tenha um excelente dia!`
    },

    pesquisa: {
        camposObrigatorios: [clientName],
        texto:
`Olá ${clientName}, recebemos seu feedback sobre a pesquisa de NPS e iremos registrar sua solicitação. O Time de Customer Success entrará em contato posteriormente.
Gentileza aguardar um minuto!`
    },

    fim_pesquisa: {
        camposObrigatorios: [numeroChamado],
        texto:
`Obrigado por ter aguardado.
A sua solicitação já foi registrada e encaminhada para a equipe de analistas que vai atendê-la.

O número do chamado é ||*${numeroChamado}||*.

Foi enviado também uma confirmação de abertura do chamado para o seu e-mail.
Ajudo em algo mais?`
    },

    avisoPausa: {
        camposObrigatorios: [clientName],
        texto:
`Prezado ${clientName},

Gostaria de informar que estarei em pausa para o intervalo de almoço a partir das *XX:XX* horas. Podemos dar continuidade ao seu atendimento assim que eu retornar às *XX:XX* horas?

Se a sua demanda for urgente, por favor me informe, que ficarei encarregado de transferir seu atendimento para outro analista da equipe que poderá dar prosseguimento imediato.

Agradeço pela compreensão e aguardo seu retorno. ☺`
    },

    avisoExpediente: {
        camposObrigatorios: [clientName],
        texto:
`Prezado ${clientName},

Gostaria de informar que estarei encerrando meu expediente às *XX:XX* horas. Podemos dar continuidade ao seu atendimento assim que eu iniciar meu expediente no próximo dia útil a partir das *XX:XX* horas?

Agradeço pela compreensão e aguardo seu retorno. ☺`
    },

    avisoReuniao: {
        camposObrigatorios: [clientName],
        texto:
`Prezado ${clientName},

Gostaria de informar que estarei me ausentando para uma reunião interna a partir das *XX:XX* horas. Podemos dar continuidade ao seu atendimento assim que eu retornar, aproximadamente às *XX:XX* horas?

Se a sua demanda for urgente, por favor me informe, que ficarei encarregado de transferir seu atendimento para outro analista da equipe que poderá dar prosseguimento imediato.

Agradeço pela compreensão e aguardo seu retorno. ☺`
    },

    finan: {
        camposObrigatorios: [clientName, numeroChamado],
        texto:
`${clientName}, o chamado ${numeroChamado} foi criado.  


Gostaríamos de informá-lo que nossa equipe financeira entrará em contato com você em breve. O prazo máximo para a realização desse contato é de até 24 horas.


Se preferir, você pode falar diretamente com o setor ligando para o nosso número fixo (31) 3801-6805 e selecionando a opção 3 da nossa URA. Um especialista do nosso time ficará feliz em ajudar você.


Ajudo em algo mais?`
    },

    ausencia: {
        camposObrigatorios: [clientName],
        texto:
`${clientName},

Devido à falta de interação, estaremos prosseguindo com seu atendimento assim que eu retornar!

Mas, gostaria de comunicar que em qualquer necessidade urgente, por gentileza *realize contato com nossa Central de Atendimento através do Telefone (31) 3801-6805*.

Agradecemos pelo seu contato, e nos falamos em breve. 😉`
    },

    bomDiaCliente: {
        camposObrigatorios: [clientName, agentName],
        texto:
`Olá ${clientName}, bom dia! 👋😄
Meu nome é ${agentName}. Estarei prosseguindo com seu atendimento.`
    },

    boaTardeCliente: {
        camposObrigatorios: [clientName, agentName],
        texto:
`Olá ${clientName}, boa tarde! 👋😄
Meu nome é ${agentName}. Estarei prosseguindo com seu atendimento.`
    },

    boaNoiteCliente: {
        camposObrigatorios: [clientName, agentName],
        texto:
`Olá ${clientName}, boa noite! 👋😄
Meu nome é ${agentName}. Estarei prosseguindo com seu atendimento.`
    },

    comercial: {
        camposObrigatorios: [],
        texto:
`Entre em contato com um de nosos consultares através do whtasapp:

https://wa.me/message/SUZ46JTHTTWXP1`
    },

    dadosTicket: {
        camposObrigatorios: [clientName, numeroChamado],
        texto:
`${clientName}, acabei de registrar a sua solicitação. Estou encaminhando a demanda para o time responsável. O analista irá iniciar as tratativas e assim que possível entrará em contato para dar feedbacks.

Segue abaixo o número de protocolo do seu chamado:
${numeroChamado}`
    },

    exemploLocal: {
        camposObrigatorios: [],
        texto:
`https://goo.gl/maps/uGBhaptpfKfs45Uy6`
    },

    exemploPreparo: {
        camposObrigatorios: [],
        texto:
`*DOPPLER COLORIDO*

O Doppler Colorido é um complemento para os exames de ultrassonografia que permite a detecção e avaliação de estruturas em movimento, em especial, do fluxo sanguíneo.

ORIENTAÇÕES INICIAIS:

Trazer pedido médico ou guia do convênio, carteirinha do convênio, Documento de identificação com foto, CPF e guia autorizada (se necessário).
É necessário chegar à clínica com 30 minutos de antecedência do horário agendado, do contrário não podemos garantir a realização dos seus exames.
Trazer exames anteriores da região a ser examinada.

O EXAME:

O Doppler é um complemento para os exames de ultrassonografia que permite a detecção e avaliação de estruturas em movimento, em especial, do fluxo sanguíneo.
Contra-indicação: o exame não apresenta contra-indicações.
Tempo médio de atendimento: entre 10 e 20 minutos em sala de exame.

PÓS-EXAME:

Sem recomendações após o procedimento.`
    },

    inicioEBR: {
        camposObrigatorios: [],
        texto:
`Estamos implementando novas ações para estar ainda mais perto dos nossos, melhorar sua experiência com nossos produtos e oferecer todo o apoio necessário para alcançar os melhores resultados no seu negócio.

Para isso, gostaríamos de *agendar um momento* para discutir como nossas soluções podem ser ainda mais eficazes para sua empresa.

Podemos explorar novas funcionalidades ou até mesmo otimizar o uso dos recursos que você já possui.`
    },

    instabilidadeWBUS: {
        camposObrigatorios: [clientName],
        texto:
`Prezado ${clientName}, bom dia.

O WhatsApp Business convencional está passando por alterações e atualizações constantes e problemas assim podem voltar a ocorrer. Nosso time interno está trabalhando ao máximo para minimizar os efeitos, mas infelizmente isto NÃO está sob nosso controle.

Anteriormente, a Meta (Facebook), dona do WhatsApp, realizava essas ações para tendenciar a utilização dos BSP (provedores oficiais).

Recentemente, essas ações foram intensificadas, pois foi lançado o WhatsApp Business Cloud API, uma plataforma hospedada na própria nuvem da Meta, para envio e recebimento de mensagens de WhatsApp para empresas.

Importante ressaltar que o Escallo já possui integração com BSPs e que também já está integrado ao WhatsApp Business Cloud API.

A Futurotec está constantemente evoluindo o Escallo para oferecer às empresas os canais mais assertivos para comunicação com seus clientes.

A recomendação é a migração do seu número para um desses novos modelos, visto que os mesmos oferecem mais privacidade, segurança e estabilidade.

Podemos entrar em contato para explicar melhor sobre as vantagens, desvantagens e o processo para essa migração?`
    },

    mensagemInvalida: {
        camposObrigatorios: [clientName],
        texto:
`Prezado ${clientName}, não recebemos áudio ou vídeo. Favor enviar apenas mensagem de texto.`
    },

    ola: {
        camposObrigatorios: [agentName],
        texto:
`Olá meu nome é ${agentName}. Em que posso te ajudar?`
    },

    PDFvaloresAPI: {
        camposObrigatorios: [],
        texto:
`https://mmd.futurotec.com.br/api/v1/mmd/download/?file=03138016805/2022/05/07/FF62768e0feb3a4.pdf`
    },

    saudacao: {
        camposObrigatorios: [agentName],
        texto:
`Olá, meu nome é ${agentName}. 😁
Prosseguirei com o seu atendimento.`
    },

    saudacaoCliente: {
        camposObrigatorios: [clientName, agentName],
        texto:
`Olá ${clientName}, meu nome é ${agentName}. Estarei prosseguindo com seu atendimento.`
    }
}

function insereAtalho(id) {
    // Recupera os dados do formulário de atalhos
    const textarea = document.getElementById('outputAtalho');
    const clientName = document.getElementById('clientName').value;
    const agentName = document.getElementById('agentName').value;
    const companyName = document.getElementById('companyName').value;
    const clientMail = document.getElementById('clientMail').value;
    const clientPhone = document.getElementById('clientPhone').value;
    const clientContactChannel = document.getElementById('clientContactChannel').value;
    const numeroChamado = document.getElementById('numeroChamado').value;

    // Recupera dados input "radio"
    const contactChannel = document.querySelector('input[name="contactChannel"]:checked')?.value; // Usando optional chaining
    const slaPriority = document.querySelector('input[name="slaPriority"]:checked')?.value; // Usando optional chaining

    // Verifica os campos obrigatórios para cada atalho
    const camposObrigatorios = atalhos[id].camposObrigatorios;
    let camposPreenchidos = true;

    // Valida campos obrigatórios
    for (const campo of camposObrigatorios) {
        if (campo === "clientName" && !clientName) {
            camposPreenchidos = false;
        }
        if (campo === "agentName" && !agentName) {
            camposPreenchidos = false;
        }
        if (campo === "companyName" && !companyName) {
            camposPreenchidos = false;
        }
        if (campo === "clientMail" && !clientMail) {
            camposPreenchidos = false;
        }
        if (campo === "clientPhone" && !clientPhone) {
            camposPreenchidos = false;
        }
        if (campo === "clientContactChannel" && !clientContactChannel) {
            camposPreenchidos = false;
        }
        if (campo === "numeroChamado" && !numeroChamado) {
            camposPreenchidos = false;
        }
        if (campo === "contactChannel" && !contactChannel) {
            camposPreenchidos = false;
        }
        if (campo === "slaPriority" && !slaPriority) {
            camposPreenchidos = false;
        }
    }

    // Se campos obrigatórios estiverem preenchidos, insere atalho
    if (camposPreenchidos) {
        // Substitui as variáveis na mensagem
        const mensagem = atalhos[id].texto
            .replace('${clientName}', clientName)
            .replace('${agentName}', agentName)
            .replace('${companyName}', companyName)
            .replace('${clientMail}', clientMail)
            .replace('${clientPhone}', clientPhone)
            .replace('${clientContactChannel}', clientContactChannel)
            .replace('${numeroChamado}', numeroChamado)
            .replace('${contactChannel}', contactChannel)
            .replace('${slaPriority}', slaPriority);

        textarea.value = mensagem + '\n';
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}