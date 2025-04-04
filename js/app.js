function botaoMenu() {
    const topo = document.getElementById('topo1');
    const naveg = document.getElementById('navegacao');
    const botao = document.getElementById('button-menu');

    const displayTopo = getComputedStyle(topo).display; // Correção crucial
    const displayTamanho = window.visualViewport.width;

  if (displayTopo === 'block' && displayTamanho <= "576"){
      // Abre o menu
      topo.style.width = '80%';
      topo.style.height = '100%';
      naveg.style.display = 'block';
      topo.style.position = 'absolute';
      topo.style.left = "0";
      topo.style.top = "0";
      topo.style.display = "flex";
      botao.style.width = "100%";
      botao.style.height = "15%";
      topo.style.alignitems = "flex-start";
      topo.style.justifycontent = "space-around";
      console.log("Valor de displayTopo:", displayTamanho); // Para depuração
      console.warn("Valor de displayTopo inesperado:", displayTamanho);
  } else if (displayTopo === 'flex' && displayTamanho <= "576") {
      // Fecha o menu
      topo.style.width = '100%';
      topo.style.height = '25%';
      naveg.style.display = 'none';
      topo.style.removeProperty('position');
      topo.style.width = "100%";
      topo.style.height = "15%";
      topo.style.display = "block";
      botao.style.display = "block";
      botao.style.width = "30%";
      botao.style.height = "auto";
      topo.style.alignitems = "center";
      topo.style.justifycontent = "center";
  } else {
      console.log("Valor de displayTopo:", displayTopo); // Para depuração
      console.warn("Valor de displayTopo inesperado:", displayTopo);
  }
}

function abreGranja(){
    window.open('https://pauloricardoromao.github.io/landing-page-granja/');
}

function abreModelaMi(){
    window.open('https://pauloricardoromao.github.io/Projeto-ModelaMi/');
}

function abreFundBra(){
    window.open('https://pauloricardoromao.github.io/Site-Curso-Fundacao-Bradesco/');
}

function abreLinkedin(){
    window.open('https://www.linkedin.com/in/paulo-ricardo-rom%C3%A3o-29535316b/');
}

function abreGitHub(){
    window.open('https://github.com/PauloRicardoRomao');
}

function abreEmail(){
    window.open('mailto:pauloromao.dev2020@gmail.com');
}



const carrossel = document.querySelector('#carrossel-projetos');
const projeto = document.querySelectorAll('#projeto');
const paginacao = document.querySelectorAll('#paginacao');

carrossel.forEach((_, index) => {
    const span = document.createElement('span');
    span.addEventListener('click', () => {
        counter = index;
        updateCarousel();
    });
    paginacao.appendChild(span);
});

const paginacaoSpans = document.querySelectorAll('#carrossel-projetos .paginacao span');
paginacaoSpans[0].classList.add('active');

function updateCarousel() {
    carrossel.style.transform = `translateX(-${counter * 100}%)`;
    paginacaoSpans.forEach(span => span.classList.remove('active'));
    paginacaoSpans[counter].classList.add('active');
}

// Navegação por toque
let touchStartX = 0;
let touchEndX = 0;

carrossel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

carrossel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) { // Deslize para a esquerda
        if (counter < projeto.length - 1) {
            counter++;
        }
    } else if (swipeDistance < -50) { // Deslize para a direita
        if (counter > 0) {
            counter--;
        }
    }

    updateCarousel();
}

// Impede o comportamento padrão de arrastar
carrossel.addEventListener('touchmove', (e) => {
    e.preventDefault();
});