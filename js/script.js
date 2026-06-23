function mostrarMensagem() {
    alert("vc clicou no botao");
}

function mostrarNome() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado").innerText = "Olá, " + nome + "!";
}

function verificarIdade() {
    let idade = Number(document.getElementById("idade").value);

    if (idade >= 18) {
        document.getElementById("resultado1").innerText = "Você é maior de idade.";
    } else {
        document.getElementById("resultado1").innerText = "Você é menor de idade.";
    }
}
function trocarImagem() {
    document.getElementById("imagem").src = "img/imagem2.jpg";
}

function esconderTexto() {
    document.getElementById("texto").style.display = "none";
}

function mostrarTexto() {
    document.getElementById("texto").style.display = "block";
}

function criarParagrafo() {
    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Este parágrafo foi criado com JavaScript.";

    document.getElementById("area").appendChild(novoParagrafo);
}

function removerAviso() {
    document.getElementById("aviso").remove();
}
