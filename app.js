// Criar a array que receb o nome dos amigos a serem sorteados
let amigos = [];

// Criação de função para adicionar os amigos que forem digitados,
// enviando mensagem de erro caso nenhum nome seja digitado
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Valor deve ser diferente de vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona à lista de amigos
    amigos.push(nome);

    // Limpa o campo para evitar errros
    input.value = "";

    //Atualização da lista na tela
    atualizarLista();
    
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");

    // Limpa a lista antes de renderizar novamente
    lista.innerHTML = "";

    // Percorre a lista e adiciona o nome do novo amigo, chamado de "li" para facilitar no HTML
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
