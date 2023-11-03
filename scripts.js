const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 2000,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
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