document.addEventListener("DOMContentLoaded", function() {
  const primeiraAba = document.getElementById("minhas-redes");
  selecionarAba(primeiraAba);
  mostrarInformacoesDaAba(primeiraAba);
});

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
  aba.addEventListener("click", function() {
    if (aba.classList.contains("selecionado")) {
      return;
    }

    selecionarAba(aba);
    mostrarInformacoesDaAba(aba);
  });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}

const imagens = document.querySelectorAll('.galeria-lightbox img');
const imagemAmpliada = document.querySelector('.imagem-ampliada');
const imagemAmpliadaImg = document.querySelector('.imagem-ampliada img');

imagens.forEach(imagem => {
  imagem.addEventListener('click', () => {
    const caminhoImagem = imagem.getAttribute('src');
    mostrarImagemAmpliada(caminhoImagem);
  });
});

function mostrarImagemAmpliada(caminhoImagem) {
  imagemAmpliadaImg.setAttribute('src', caminhoImagem);
  imagemAmpliada.style.display = 'flex';
}