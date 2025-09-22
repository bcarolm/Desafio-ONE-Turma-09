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

    // Atualização da lista na tela
    atualizarLista();
    
}

// Função que irá atualizar a lista de amigos e exibir os nomes adicionados na tela
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

// Função que irá sortear o amigo e permitir a exibição da mensagme na tela
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Verifica se há amigos
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Sorteia um índice
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Pega o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado com o nome do amigo em negrito (trong)
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}

