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
const productCards = document.querySelectorAll('.card-product');

productCards.forEach((activity) => {
  activity.addEventListener('mouseenter', function (e) {
    gsap.to(activity, { duration: 0.05, backgroundImage: `url(${e.target.dataset.image})` });
    gsap.fromTo(activity, { duration: 15, backgroundSize: '100%' }, { duration: 130, backgroundSize: '350%' });
  });
  activity.addEventListener('mouseleave', function (e) {
    gsap.to(activity, { duration: 0.2, backgroundImage: 'none' });
  });
});

cards.forEach((link, e) => {
  link.addEventListener('mouseenter', createHover);
  link.addEventListener('mouseleave', createHover);
});

function createHover(e) {
  const allSiblings = cardArray.filter((item) => item !== e.target);
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

const menuButton = document.getElementById('burger');
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
