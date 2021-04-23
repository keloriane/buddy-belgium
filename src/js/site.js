import { intro } from './intro';
import { marques } from './marques';
import { category } from './category';
import './gsap/home.gsap';

export const site = {
  _loaded: () => {
    document.addEventListener('DOMContentLoaded', () => {
      intro.init();
      marques.init();
      category.init();
    });
  },

  _beforeLeaving: () => {
    window.addEventListener('beforeunload', () => {});
  },

  logP: () => {
    console.log('log parcours');
  },
};
