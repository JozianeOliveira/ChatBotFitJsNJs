const dialogFlow = require('dialogflow'); // Importa a biblioteca dialogflow

const configs = require('./dialogflow.json'); // Configurações do Dialogflow

const sessionClient = new dialogFlow.SessionsClient({
    projectId: configs.project_id, // ID do projeto
    credentials: {
        private_key: configs.private_key,
        client_email: configs.client_email
    } // Credenciais do Dialogflow
});

async function sendMessage(chatId, message) {
    const sessionPath = sessionClient.sessionPath(configs.project_id, chatId); // Caminho da sessão
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'pt-BR' // Código do idioma
            }
        }
    }

    const responses = await sessionClient.detectIntent(request); // Detecta a intenção da mensagem
    const result = responses[0].queryResult; // Resultado da intenção
    return {
        text: result.fulfillmentText, // Texto da resposta
        intent: result.intent.displayName, // Nome da intenção
        fields: result.parameters.fields // Campos da intenção
    };
};

module.exports.sendMessage = sendMessage; // Exporta a função sendMessage