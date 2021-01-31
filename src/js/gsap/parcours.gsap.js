import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min';
gsap.registerPlugin(ScrollTrigger);

console.log('parcours');

function init() {
  const innerText = document.querySelectorAll('.inner-text');
  gsap.from('span h2', {
    duration: 0.5,
    y: 100,
    stagger: 0.13,
    scrollTrigger: {
      trigger: '#parcours',
      start: 600,
      end: 'bottom bottom',
    },
  });
  gsap.from(['.inner-text  p', '.info-text p'], {
    duration: 0.5,
    opacity: 0,
    y: '80%',
    stagger: 0.15,
    scrollTrigger: {
      trigger: '#parcours',
      start: 600,
      end: 'bottom bottom',
    },
  });
}

window.addEventListener('load', () => {
  init();
});
