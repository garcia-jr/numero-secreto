// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";
let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let aleatorio = gerarNumeroAleatorio();
let tentativa = 1;

function AlterarTexto(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}
function exibirMensagemInicial() {
  AlterarTexto("h1", "Jogo do número secreto");
  AlterarTexto("p", "Escolha um número entre 1 e 50");
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute > aleatorio) {
    AlterarTexto("p", "O número é menor");
  } else if (chute < aleatorio) {
    AlterarTexto("p", "O número é maior");
  } else {
    let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas =
      "Você acertou com " + tentativa + " " + palavraTentativa;
    AlterarTexto("h1", mensagemTentativas);
    AlterarTexto("p", "");
    document.getElementById("reiniciar").removeAttribute("disabled");
  }
  tentativa++;
  limparCampo();
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementos = listaDeNumerosSorteados.length;

  if (quantidadeDeElementos == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio;
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  aleatorio = gerarNumeroAleatorio();
  limparCampo();
  tentativa = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

exibirMensagemInicial();
