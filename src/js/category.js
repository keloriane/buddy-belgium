import { Swiper } from 'swiper';
import { includeJs } from './helpers';

export const category = {
  init() {
    console.log(includeJs('category'));
    if (includeJs('category')) {
      this.configSlider();
    }
  },

  configSlider() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        '@0.00': {
          slidesPerView: 2,
        },
        '@0.75': {
          slidesPerView: 3,
        },
        '@1.00': {
          slidesPerView: 4,
        },
        '@1.50': {
          slidesPerView: 4,
        },
      },
    });
  },
};
