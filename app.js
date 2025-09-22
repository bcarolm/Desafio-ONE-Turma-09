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

    // Incluir no próximo commit: Atualização da lista na tela
    
}
