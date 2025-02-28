const chamadoGerado = {
    gerarChamado: ({clientName, contactChannel, companyName, clientContactChannel, companyHost, serviceLink}) =>

`Prezado(a) ${clientName}, bom dia!

Conforme conversamos pelo WhatsApp, o seu chamado foi registrado e a sua solicitação está sendo atendida por um de nossos analistas, em breve retornaremos um feedback. Segue abaixo a descrição de sua solicitação:


Descrição da Solicitação: Cliente entrou em contato solicitando configuração de URA. 


Conforme acordamos, qualquer necessidade de contato sobre o andamento do seu chamado, estaremos comunicando através do ${contactChannel}. Por favor, se atente para o recebimento de notificações e para a formalização do encerramento do seu chamado.


Após o encerramento de seu chamado, será encaminhado para você uma pesquisa de satisfação relacionada a este atendimento, peço que, por gentileza, participe desta pesquisa. Sua opinião é muito importante para nós!


Qualquer dúvida ou necessidade estamos à disposição!


E-mail: suporte@futurotec.com.br
Portal de Chamados: https://futurotec.desk.ms/?LoginPortal
Telefone Suporte: (31) 3801-6805
Ramal Suporte: 9999

Contato: ${clientName} | ${companyName} | ${clientContactChannel}
Host: ${companyHost}
Link do atendimento: ${serviceLink}`
}