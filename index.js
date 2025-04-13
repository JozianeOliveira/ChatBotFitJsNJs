const TelegramBot = require('node-telegram-bot-api'); // Importa a biblioteca node-telegram-bot-api
const dialogFlow = require('./dialogFlow'); // Importa o arquivo dialogFlow.js
const youtube = require('./youtube'); // Importa o arquivo youtube.js

const token = 'Token do bot do Telegram'; // Token do bot  

const bot = new TelegramBot(token, { polling: true }); // Cria uma instância do bot com o token e habilita o polling

bot.on('message', async function (msg) {
    const chatId = msg.chat.id;  // ID do chat
    console.log(msg.text);       // Mensagem recebida

    const dfResponse = await dialogFlow.sendMessage(chatId.toString(), msg.text); // Envia a mensagem para o Dialogflow e aguarda a resposta

    let responseText = dfResponse.text; // Texto da resposta

    if (dfResponse.intent === 'receitas') {
        responseText = await youtube.searchVideoURL(responseText, dfResponse.fields.receitas1.stringValue); // Busca o vídeo no Youtube
    }

    if (responseText && responseText.trim() !== "") {
        bot.sendMessage(chatId, responseText);
    } else {
        bot.sendMessage(chatId, "Desculpe, não consegui encontrar uma resposta 😅 Tente perguntar de outro jeito!");
    } // Envia a resposta para o usuário
});