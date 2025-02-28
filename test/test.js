// test.js
function insereAtalho(msgType) {
    // Obtendo os valores dos campos do formulário
    const clientName = document.getElementById('clientName').value;
    const clientPhone = document.getElementById('clientPhone').value;
    const clientMail = document.getElementById('clientMail').value;
    const clientGender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'não especificado';

    const params = {
        clientName,
        clientPhone,
        clientMail,
        clientGender
    };
    // Usando o objeto templates para obter a mensagem
    let message = '';

    if (templates[msgType]) {
        message = templates[msgType](params);
    } else {
        message = 'Mensagem não reconhecida.';
    }

    // Inserindo a mensagem no textarea
    document.getElementById('outputMessage').value = message;
}