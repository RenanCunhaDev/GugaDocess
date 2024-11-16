// Função para abrir o modal com a imagem ampliada
function abrirModal(imagem) {
    var modal = document.getElementById("modal");
    var modalImagem = document.getElementById("imagemModal");

    modal.style.display = "block"; // Exibe o modal
    modalImagem.src = imagem.src; // Define o src da imagem no modal
}

// Função para fechar o modal
function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; // Oculta o modal
}