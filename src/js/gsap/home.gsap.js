import { gsap } from 'gsap/dist/gsap';

const heroAnimation = gsap.timeline({ paused: true });

const homeWrapper = document.getElementsByClassName('home-wrapper')[0];
const lines = document.querySelectorAll('.line-span');
window.addEventListener('load', function (e) {
  gsap.from(lines, { stagger: 0.05, duration: 0.8, y: 200, rotation: 4, ease: 'Power4.easOut' });
});
