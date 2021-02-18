import {html} from './html'
import 'swiper/swiper-bundle.css';
import './gsap/product.gsap';
import './gsap/smoothScroll.js';
import './gsap/parcours.gsap.js';
import './gsap/service.gsap.js';
import './gsap/activity.gsap.js';
import {intro} from "./intro";
import {redirect} from "./helpers";

export const site = {
  _loaded: () => {
    document.addEventListener('DOMContentLoaded', () => {
      intro.init();
    });
  },

  _beforeLeaving: () => {
    window.addEventListener('beforeunload', () => {});
  },
};


