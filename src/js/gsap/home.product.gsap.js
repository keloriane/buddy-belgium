import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min';
import {isRootPage} from "../helpers";
import {_event} from "../events";

gsap.registerPlugin(ScrollTrigger);

const allLinks = gsap.utils.toArray('.product-list-container a');
const largeImage = document.querySelector('.portfolio__image--l');
const lInside = document.querySelector('.portfolio__image--l .image_inside');
// const smallImage = document.querySelector('.portfolio__image--s');
// const sInside = document.querySelector('.portfolio__image--s .image_inside');

function initHover() {
  const productList = document.getElementsByClassName('product-list-container')[0];
  allLinks.forEach((link) => {
    link.addEventListener('mouseenter', createHover);
    link.addEventListener('mouseleave', createHover);
  });
  productList.addEventListener('mouseleave', () => {
    gsap.to(allLinks, { autoAlpha: 1 });
    gsap.set(lInside, { backgroundImage: `inherit` });
  });
}

function translateLink() {
  allLinks.forEach((link, index) => {
    if (index % 2 === 0) {
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
    const {imagelarge} = e.target.dataset;
    const allSiblings = allLinks.filter((item) => item !== e.target);
    const tl = gsap.timeline();
    tl.set(lInside, { backgroundImage: `url(${imagelarge})` })
      .set(lInside, { backgroundRepeat: 'no-repeat' })
      .to(e.target, { color: '#3A7498', autoAlpha: 1 })
      .set(allSiblings, { autoAlpha: 0.3, color: 'transparent', delay: -1 })
      .to(largeImage, { duration: 0.4, autoAlpha: 1 })
      .fromTo(
        lInside,
        { backgroundSize: '125%', duration: 0.5, delay: -1 },
        { backgroundSize: '100%', duration: 0.5, delay: -1 }
      );
  } else if (e.type === 'mouseleave') {
    const tl = gsap.timeline();
    tl.to([allLinks], { color: 'transparent', autoAlpha: 0.3 });
  }
}

function init() {
  initHover();
  translateLink();
}


_event.siteIsLoaded(() => {
  if (isRootPage("pro")) {
    init();
  }
})




