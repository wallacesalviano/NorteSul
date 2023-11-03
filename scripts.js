const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 2000,
  },
});

// Criação do butão de ação de arrastar pra cima
function buttonScrollToTop() {
  window.addEventListener('scroll', () => {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    if (document.documentElement.scrollTop > 100) {
      scrollToTopButton.classList.add('active');
    } else {
      scrollToTopButton.classList.remove('active');
    }
  });

  document.getElementById('scrollToTopButton').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

function inicializarScrollReveal() {
  var sr = ScrollReveal({ reset: true });


  sr.reveal('.cabeçalho', { duration: 1000 });
  sr.reveal('.banner', { duration: 1000 });
  sr.reveal('.carrossel', { duration: 1000 });
  sr.reveal('.descritivo', {
    duration: 1000
  });
  sr.reveal('.vantagens', { duration: 1000 });
  sr.reveal('.about__reveal', { duration: 1000 });
  sr.reveal('.atuação', { duration: 1000 });
  sr.reveal('.footer', { duration: 1000 });
}

inicializarScrollReveal();
buttonScrollToTop();