import 'swiper/swiper-bundle.css';
import './sass/style.scss';
import './js/gsap/product.gsap';
import './js/gsap/parcours.gsap.js';
import './js/gsap/activity.gsap.js';

//PAGES
import { site } from './js/site';

//GSAP
import { websiteIndexLocalUrl } from './config';
//WEBSITE INITIALIZATION
site._loaded();
site._beforeLeaving();
