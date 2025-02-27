function insereAtalho(msgType) {
    // Obtendo os valores dos campos do formulário
    const clientName = document.getElementById('clientName').value;
    const clientPhone = document.getElementById('clientPhone').value;
    const clientMail = document.getElementById('clientMail').value;
    const clientGender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'não especificado';

    let message = '';

    // Definindo a mensagem com base no tipo de atalho
    switch (msgType) {
        case 'msg1':
            message = `Olá, seu nome é ${clientName}`;
            break;
        case 'msg2':
            message = `Olá '${clientName}', seu email é ${clientMail}`;
            break;
        case 'msg3':
            message = `Olá ${clientName}, seu número é ${clientPhone} e seu gênero é ${clientGender}`;
            break;
        default:
            message = 'Mensagem não reconhecida.';
    }

    // Inserindo a mensagem no textarea
    document.getElementById('outputMessage').value = message;
}