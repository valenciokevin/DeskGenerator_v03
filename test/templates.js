// templates.js
const templates = {
    msg1: ({clientName}) => `Olá, seu nome é ${clientName}`,
    msg2: ({clientName, clientMail}) => `Olá ${clientName}, seu email é ${clientMail}`,
    msg3: ({clientName, clientPhone, clientGender}) => `Olá ${clientName}, seu número é ${clientPhone} e seu gênero é ${clientGender}`
};