import { home } from './home';
import { intro } from './intro';
import { marques } from './marques';
import { category } from './category';
import { single_product } from './single_product';
import './gsap/menu.gsap';

export const site = {
  _loaded: () => {
    document.addEventListener('DOMContentLoaded', () => {
      home.init();
      intro.init();
      marques.init();
      category.init();
      single_product.init();
    });
  },

  _beforeLeaving: () => {
    window.addEventListener('beforeunload', () => {});
  },
};
