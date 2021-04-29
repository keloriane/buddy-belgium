import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min';
gsap.registerPlugin(ScrollTrigger);

const menuButton = document.getElementById('burger__menu');
const menu = document.getElementById('menu-burger');
const close = document.getElementsByClassName('close');
let isOpen = false;
menuButton.addEventListener('click', function (e) {
  isOpen = !isOpen;
  if (isOpen === true) {
    menu.style.display = 'flex';
  } else if (isOpen === false) {
    menu.style.display = 'none';
  }
});
close[0].addEventListener('click', () => {
  isOpen = !isOpen;
  if (isOpen === true) {
    menu.style.display = 'flex';
  } else if (isOpen === false) {
    menu.style.display = 'none';
  }
});
