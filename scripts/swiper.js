const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    1201: {
      slidesPerView: 3,
      spaceBetween: 70
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  },

});
