import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min';

const lineRegion = document.getElementsByClassName('line-region');
const headerBrand = document.getElementsByClassName('brand__header__text');
console.log(lineRegion);
gsap.registerPlugin(ScrollTrigger);
gsap.from(lineRegion, {
  duration: 0.5,
  y: 100,
  stagger: 0.13,
  scrollTrigger: {
    trigger: '.region',

    start: 200,
  },
});
gsap.from(headerBrand, {
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: '.region',

    start: 200,
  },
});
