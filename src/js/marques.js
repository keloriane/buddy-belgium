import Swiper, { Navigation } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { gsap } from 'gsap/dist/gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import {includeJs, isRootPage} from './helpers';

Swiper.use([Navigation]);
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export const marques = {
  init() {
    console.log('Marques init')
    if (isRootPage('marques')) {
      console.log('Marques js included')
      this.scrollToBrands();
      this.scrollToTop();
    } else {
      this.displayScrollToTop(false);
    }
  },

  scrollToBrands() {
    gsap.registerPlugin(ScrollToPlugin);
    let brands = document.querySelectorAll('.marques__scroll-menu__list__link');
    brands.forEach((brand) => {
      brand.addEventListener('click', (e) => {
        console.log('click scroll');
        e.preventDefault();
        let sectionId = '#' + brand.outerText;
        this.scrollTo(brand, 0.3, sectionId);
      });
    });
  },

  scrollToTop() {
    gsap.registerPlugin(ScrollToPlugin);
    let link = document.querySelector('.marques__scroll-to-top');
    link.addEventListener('click', (e) => {
      e.preventDefault();
      this.scrollTo(link, 0.3, { y: 0 });
    });
  },

  displayScrollToTop(display) {
    let link = document.querySelector('.marques__scroll-to-top');
    link.style.display = display ? 'block' : 'none';
  },

  scrollTo(el, duration, scrollTo) {
    gsap.to(window, { duration, scrollTo });
  },
};
