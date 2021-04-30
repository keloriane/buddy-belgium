import './gsap/home.about.gsap.js';
import './gsap/home.header.gsap.js';
import './gsap/home.parcours.gsap.js';
import './gsap/home.product.gsap.js';
import {includeJs, isRootPage} from './helpers';

export const home = {
  init() {
    console.log('proHomepage init')
    if (isRootPage('pro')) {
      console.log('proHomepage included')
    }
  }
};
