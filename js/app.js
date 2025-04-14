function verificaLargura(){
    const menuMobile = document.getElementById('navegacao');
    const textMenuMobile = menuMobile.querySelectorAll('ul li a');

    if (window.innerWidth <= 1024){
        menuMobile.style.display = 'none';
        textMenuMobile.forEach(textMenuMobile => {
            if (window.innerWidth <= 389) {
                textMenuMobile.style.fontSize = '2.0em';
            }
        });
    } else if(window.innerWidth > 1024){
        menuMobile.style.display = 'flex';
    } 
}

function abreMenuMobile(){
    const menu = document.getElementById('navegacao');

    const menuProp = getComputedStyle(menu).display;
    if(menuProp === 'none'){
        menu.style.display = 'flex';
        menu.style.zIndex = '30';
    }else if(menuProp === 'flex'){
        menu.style.display = 'none';
    }

}

function escondeMenuMobile(){
    const menuMobile = document.getElementById('container-navegacao');
    const tela = document.querySelectorAll('body');
    if (window.innerWidth <= 1024) {
        tela.style.overflow = 'auto';
        menuMobile.style.display = 'none';
    }
}

function saibaMais(){
    /*window.location.href = 'sobre.html';*/
    window.location.href = 'sobre.html';
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
    
    function enviarEmail(destinatario, assunto, corpo) {
        const assuntoCodificado = encodeURIComponent(assunto);
        const corpoCodificado = encodeURIComponent(corpo);
        const mailtoUrl = `mailto:${destinatario}?subject=${assuntoCodificado}&body=${corpoCodificado}`;
        window.open(mailtoUrl, '_self');
    }
      
    const emailDestino = 'pauloromao.dev2020@gmail.com';
    const assuntoEmail = 'Quero desenvolver minha aplicação';
    const mensagemEmail = 'Olá, gostaria de obter mais informações. Poderiam me ajudar?';
      
    enviarEmail(emailDestino, assuntoEmail, mensagemEmail);

}


const slides = document.querySelectorAll('#projeto');
const prevButton = document.querySelector('.slide-prev');
const nextButton = document.querySelector('.slide-next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('slide-active');
    if (i === index) {
      slide.classList.add('slide-active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

showSlide(currentSlide);