import {html} from './html'
import 'swiper/swiper-bundle.css';
import './gsap/product.gsap';
import './gsap/smoothScroll.js';
import './gsap/parcours.gsap.js';
import './gsap/service.gsap.js';
import './gsap/activity.gsap.js';
import {intro} from "./intro";


export const site = {
  _loaded: () => {
    document.addEventListener('DOMContentLoaded', () => {
      intro.inputState();
      intro.buttonState();
    });
  },

  _beforeLeaving: () => {
    window.addEventListener('beforeunload', () => {
    });
  },
};


