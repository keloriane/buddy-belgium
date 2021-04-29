/*
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function init() {}

window.addEventListener('load', () => {
  init();
});

let container = document.getElementById('scroll-container');
let height;
function setHeight() {
  height = container.clientHeight;
  document.body.style.height = `${height}px`;
}
ScrollTrigger.addEventListener('refreshInit', setHeight);
gsap.to(container, {
  y: () => -(height - document.documentElement.clientHeight),
  ease: 'none',
  scrollTrigger: {
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    invalidateOnRefresh: true,
  },
});
*/
