import { animationLoader } from './gsap/loader.gsap';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './gsap/product.gsap';
import './gsap/smoothScroll.js';
import './gsap/parcours.gsap.js';
import './gsap/service.gsap.js';
import './gsap/activity.gsap.js';

export const site = {
  _loaded: () => {
    document.addEventListener('DOMContentLoaded', () => {
      site.preventBarbaEventOnAdminLink();
      site.displayLoaderFirstTime();
      console.log('bonjour');
    });
  },

  _beforeLeaving: () => {
    window.addEventListener('beforeunload', () => {
      site.removeStorage();
    });
  },

  displayLoaderFirstTime: () => {
    let loaderDisplayed = !!parseInt(localStorage.getItem('alreadyDisplayed'));
    console.log('xxxxxxxxxxx', loaderDisplayed);
    if (!loaderDisplayed) {
      site.launchLoader();
    }
  },

  launchLoader: () => {
    animationLoader.loaderIn();
    animationLoader.reset();
    localStorage.setItem('alreadyDisplayed', '1');
  },

  removeStorage: () => {
    localStorage.removeItem('alreadyDisplayed');
    localStorage.clear();
    console.log('bye bye');
  },

  preventBarbaEventOnAdminLink: () => {
    let links = document.querySelectorAll('#wpadminbar a');
    let admin = document.getElementById('wpadminbar');
    if (admin !== null) {
      admin.setAttribute('data-barba-prevent', 'all');
      for (const link of links) {
        link.classList.add('no-barba');
      }
    }
  },

  preventRefreshOnLinks: () => {
    let links = document.querySelectorAll('.nav-main a');
    for (const link of links) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
      });
    }
  },
};

var swiper = new Swiper('.product-list-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
