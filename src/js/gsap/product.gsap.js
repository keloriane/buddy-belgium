import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min';

gsap.registerPlugin(ScrollTrigger);

console.log('hello');
const allLinks = gsap.utils.toArray('.product-list-container a');
const pageBackground = document.querySelector('.fill-background');
const largeImage = document.querySelector('.portfolio__image--l');
const smallImage = document.querySelector('.portfolio__image--s');
const lInside = document.querySelector('.portfolio__image--l .image_inside');
const sInside = document.querySelector('.portfolio__image--s .image_inside');

console.log(allLinks);

function initHover() {
  allLinks.forEach((link) => {
    link.addEventListener('mouseenter', createHover);
    link.addEventListener('mouseleave', createHover);
  });
}

function translateLink() {
  allLinks.forEach((link, index) => {
    if (index % 2 === 0) {
      const tl = gsap.timeline();
      //tl.from(link, { duration: 3, translateX: '100%' });
      gsap.from(link, {
        scrollTrigger: {
          trigger: '.product',
          end: 'top 100px',
          scrub: 1,
        },
        x: '100%',
        duration: 3,
      });
    } else {
      const tl = gsap.timeline();
      //tl.from(link, { duration: 3, translateX: '100%' });
      gsap.from(link, {
        scrollTrigger: {
          trigger: '.product',
          end: 'top 100px',
          scrub: 1,
        },
        x: '-100%',

        duration: 5,
      });
    }
  });
}

function createHover(e) {
  if (e.type === 'mouseenter') {
    const { color, imagelarge, imagesmall } = e.target.dataset;
    const allSiblings = allLinks.filter((item) => item !== e.target);
    const tl = gsap.timeline();
    tl.set(lInside, { backgroundImage: `url(${imagelarge})` })
      .to(e.target, { color: '#3A7498', autoAlpha: 1 })
      .to(allSiblings, { duration: 0.1, autoAlpha: 0.3, color: 'transparent', delay: -1 })
      .to(largeImage, { duration: 0.4, autoAlpha: 1 })
      .to(lInside, { backgroundSize: '100%', duration: 0.5, delay: -1 });
  } else if (e.type === 'mouseleave') {
    const tl = gsap.timeline();
    tl.set(lInside, { backgroundSize: '125%' });
  }
}

function init() {
  initHover();
  translateLink();
}

window.addEventListener('load', function () {
  init();
});
