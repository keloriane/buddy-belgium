import {Swiper} from "swiper";
import {gsap} from 'gsap/dist/gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import {includeJs} from "./helpers";


export const marques = {
  init() {
    if (includeJs('marques')) {
      this.configSlider()
      this.scrollToBrands()
      this.scrollToTop()
    } else {
      this.displayScrollToTop(false)
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
          slidesPerView: 2,
        },
        '@1.00': {
          slidesPerView: 2,
        },
        '@1.50': {
          slidesPerView: 2,
        },
      }
    });
  },

  scrollToBrands() {
    gsap.registerPlugin(ScrollToPlugin);
    let brands = document.querySelectorAll('.marques__scroll-menu__list__link')
    brands.forEach(brand => {
      brand.addEventListener('click', (e) => {
        e.preventDefault()
        let sectionId = '#' + brand.outerText
        this.scrollTo(brand, 0.3, sectionId)
      })
    })
  },

  scrollToTop() {
    gsap.registerPlugin(ScrollToPlugin);
    let link = document.querySelector('.marques__scroll-to-top')
    link.addEventListener('click', (e) => {
      e.preventDefault()
      this.scrollTo(link, 0.3, {y: 0})
    })
  },

  displayScrollToTop(display) {
    let link = document.querySelector('.marques__scroll-to-top')
    console.log(link)
    link.style.display = display ? "block" : "none"
  },

  scrollTo(el, duration, scrollTo) {
    gsap.to(window, {duration, scrollTo})
  }
};


