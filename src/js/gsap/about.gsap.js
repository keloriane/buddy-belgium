import { gsap } from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  import { deScale, fadeIn, fadeInUp, fadeInUpStagger } from './animation.gsap';
  import {marques} from "../marques";
  import {intro} from "../intro";

  const heroTl = gsap.timeline();
  heroTl
    .from('h1 div .line ', { delay: 1, duration: 0.3, y: '100%', stagger: 0.1, rotation: 7, transformOrigin: 'left 0%' })
    .from('.hero-slider', { duration: 1.5, opacity: 0 });
});

