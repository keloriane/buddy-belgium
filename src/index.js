import 'swiper/swiper-bundle.css';
import './sass/style.scss';
//PAGES
import {site} from './js/site';
//GSAP
import './js/gsap/product.gsap';
import './js/gsap/smoothScroll.js';
import './js/gsap/parcours.gsap.js';
import './js/gsap/service.gsap.js';
import './js/gsap/activity.gsap.js';
//WEBSITE INITIALIZATION
site._loaded();
site._beforeLeaving();


