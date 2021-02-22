import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min';
gsap.registerPlugin(ScrollTrigger);

gsap.to(['.crea', '.ser'], {
  duration: 1,
  marginTop: 0,
  scrollTrigger: {
    trigger: '.activity',
    start: 'center center',
    end: 'bottom bottom',
  },
});

const cards = document.querySelectorAll('.card');

const cardArray = gsap.utils.toArray(cards);

console.log(cardArray);
cards.forEach((link, e) => {
  link.addEventListener('mouseenter', createHover);
  link.addEventListener('mouseleave', createHover);
});

function createHover(e) {
  const allSiblings = cardArray.filter((item) => item !== e.target);
  console.log(allSiblings);
  if (e.type === 'mouseenter') {
    gsap.to(e.target.querySelector('.exclusion'), {
      duration: 0.2,
    });
    gsap.fromTo(
      e.target.querySelector('h2'),
      {
        duration: 0.2,
        opacity: 0,
        y: 200,
      },
      {
        duration: 0.2,
        opacity: 1,
        y: 0,
      }
    );
    /* gsap.to(allSiblings, { duration: 0.1, opacity: 0.3 });*/
  } else if (e.type === 'mouseleave') {
    gsap.fromTo(
      e.target.querySelector('h2'),
      {
        duration: 0.2,
        opacity: 0,
        y: 0,
      },
      {
        duration: 0.2,
        opacity: 1,
        y: 200,
      }
    );

    /*  gsap.to(e.target.querySelector('.exclusion'), {
      duration: 0.2,
      backgroundColor: 'none',
      mixBlendMode: 'none',
    });*/
  }
}

this.dom = {};
this.dom.el = document.querySelector('.js-slider');
this.dom.container = this.dom.el.querySelector('.js-container');
this.dom.items = this.dom.el.querySelectorAll('.js-item');
this.dom.images = this.dom.el.querySelectorAll('.js-img-wrap');
this.dom.progress = this.dom.el.querySelector('.js-progress');
const max = -this.dom.container.offsetWidth + window.innerWidth;
const progress = ((scroll.state.last - 0) * 100) / (max - 0) / 100;

this.dom.progress.style.transform = `scaleX(${progress})`;
function setCache() {
  this.items = [];
  [...this.dom.items].forEach((el) => {
    const bounds = el.getBoundingClientRect();

    this.items.push({
      img: el.querySelector('img'),
      bounds,
      x: 0,
    });
  });
}

const { bounds } = item;
const inView = scrollLast + window.innerWidth >= bounds.left && scrollLast < bounds.right;
const newMin = -(window.innerWidth / 12) * 3;
const newMax = 0;
item.x = ((percentage - 0) / (100 - 0)) * (newMax - newMin) + newMin;
