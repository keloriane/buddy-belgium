import {home} from "./home";
import { intro } from './intro';
import { marques } from './marques';
import { category } from './category';

export const site = {
  _loaded: () => {
    document.addEventListener('DOMContentLoaded', () => {
      home.init();
      intro.init();
      marques.init();
      category.init();
    });
  },

  _beforeLeaving: () => {
    window.addEventListener('beforeunload', () => {});
  }
};
