const Youtube = require('youtube-node');    // Importa a biblioteca youtube-node

const config = require('./youtube-config.json'); // Configurações do Youtube

const youtube = new Youtube(); // Cria uma instância do youtube-node
youtube.setKey(config.key); // Define a chave da API do Youtube

function searchVideoURL(message, queryText) {
    return new Promise((resolve, reject) => {
        youtube.search(`Receita ${queryText}`, 3, function(error, result) {
            if(!error){
                const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);
                const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`);
                resolve(`${message} ${youtubeLinks.join('\n')}`); // Exibe o resultado da pesquisa no console
            } else {
                reject('Erro!'); // Exibe o erro no console
            }
        }); 
    });
};

module.exports.searchVideoURL = searchVideoURL; // Exporta a função searchVideoURL