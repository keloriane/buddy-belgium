import './gsap/home.about.gsap.js';
import './gsap/home.header.gsap.js';
import './gsap/home.parcours.gsap.js';
import './gsap/home.product.gsap.js';
import {includeJs, isRootPage} from './helpers';

export const home = {
  init() {
    console.log('proHomepage init')
    if (isRootPage('pro') || isRootPage('customers')) {
      console.log('proHomepage included')
      this.displayMenu()
    }
  },

  displayMenu() {
    let open = false;
    const menu = document.getElementById('menu-burger');
    const close = document.getElementById('close');
    const menuButton = document.getElementById('burger__menu');
    console.log(menuButton);
    menuButton.addEventListener('click', function (e) {
      open = !open;
      console.log('hello');
      console.log(open);
      if (open === true) {
        menu.style.display = 'block';
      }
    });
    close.addEventListener('click', function () {
      open = false;
      menu.style.display = 'none';
    });
  }
};
