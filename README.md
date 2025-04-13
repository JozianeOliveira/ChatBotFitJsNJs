# 🤖🍲 Bot de Receitas Saudáveis no Telegram

Este projeto é um **bot para Telegram** desenvolvido em **Node.js**, que utiliza **Dialogflow** e a **API do YouTube** para recomendar **vídeos de receitas saudáveis** com base em mensagens de linguagem natural enviadas por usuários.

---

## 💡 O que o bot faz?

- Entende mensagens como “quero uma receita de salada” ou “me indica algo com frango” usando o **Dialogflow**;
- Interpreta a intenção e extrai os ingredientes desejados;
- Busca vídeos no YouTube com base na intenção reconhecida;
- Retorna os links diretamente na conversa do Telegram.

---

## 📦 Estrutura do Projeto
- dialogFlow.js # Integração com o Dialogflow 
- dialogflow.json # Arquivo de credenciais do Dialogflow
-  youtube.js # Integração com a API do YouTube
-  youtube-config.json # Chave da API do YouTube
-  index.js # Arquivo principal que inicia e gerencia o bot
-  package-lock.json # Lockfile do NPM
-  README.md # Documentação do projeto


---

## 🚀 Tecnologias e Bibliotecas Utilizadas

| Tecnologia                | Descrição                                                   |
|---------------------------|-------------------------------------------------------------|
| **Node.js**               | Ambiente de execução JavaScript server-side                 |
| **Dialogflow**            | Processamento de linguagem natural (NLP)                    |
| **Telegram Bot API**      | Envio e recebimento de mensagens no Telegram                |
| **youtube-node**          | Wrapper para a API do YouTube                               |
| **node-telegram-bot-api** | Biblioteca para integração com bots do Telegram             |

---

## 🛠️ Como rodar o projeto

### 1. Clone o repositório:

git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

### 2. Instale as dependências:
npm install

### 3. Crie os seguintes arquivos (não versionados):
🔐 dialogflow.json
Este arquivo deve conter as credenciais do seu agente Dialogflow. Você pode exportá-lo diretamente do console do Dialogflow (tipo de conta: Service Account).

Exemplo:
{
  "type": "service_account",
  "project_id": "seu-projeto-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n",
  "client_email": "seu-email@seuprojeto.iam.gserviceaccount.com"
}

🔐 youtube-config.json
Deve conter a chave da sua API do YouTube:
{
  "key": "SUA_CHAVE_API_YOUTUBE"
}

### 4. Inicie o bot:
node index.js

---

## 📌 Uso no Telegram
Com o bot rodando, envie uma mensagem como:

"Quero uma receita de salmão"

E o bot irá retornar links do YouTube com sugestões de receitas relacionadas.

---

## 📄 Importante
NÃO SUBA os arquivos dialogflow.json e youtube-config.json para repositórios públicos.

Adicione-os ao seu .gitignore para evitar vazamentos de credenciais.

Exemplo de .gitignore:
dialogflow.json
youtube-config.json

---

## 📚 Recomendações
Crie suas intenções no Dialogflow, como receitas, com parâmetros (ex: receitas1) para capturar ingredientes;

Treine o agente com frases variadas;

Customize as respostas para o seu estilo de bot.

---

## 📬 Contribuições
Pull requests são bem-vindos! Se tiver sugestões de melhorias, novas intenções ou ideias para novas funcionalidades, fique à vontade para colaborar! 🙌

---





