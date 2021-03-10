import {Swiper} from "swiper";

export const marques = {

  init() {
    this.configSlider()
    console.log('folie')
  },

  configSlider() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }
    });
  },
};


