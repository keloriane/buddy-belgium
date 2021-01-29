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

cards.forEach((link, e) => {
  link.addEventListener('mouseenter', createHover);
});

function createHover(e) {
  if (e.type === 'mouseenter') {
    gsap.to(e.target.querySelector('.exclusion'), {
      duration: 0.2,
      backgroundColor: '#EA4A77B',
      mixBlendMode: 'color-burn',
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
  }
}
