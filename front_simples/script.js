// script.js

// Captura elementos do DOM
const chatBody = document.getElementById('chatBody');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Função para adicionar uma nova mensagem ao chat
function addMessage(content, isSentByUser = true) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(isSentByUser ? 'sent' : 'received');

    messageElement.innerHTML = `
        <p>${content}</p>
        <span>${new Date().toLocaleTimeString()}</span>
    `;

    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight; // Rolagem automática para a última mensagem
}

// Evento de clique para o botão "Enviar"
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        addMessage(message);
        messageInput.value = ''; // Limpa o campo de entrada
    }
});

// Evento de teclado para enviar mensagem com "Enter"
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
