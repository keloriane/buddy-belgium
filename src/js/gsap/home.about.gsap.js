import { gsap } from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import {_event} from "../events";
import {isRootPage} from "../helpers";

function init(){
  gsap.registerPlugin(ScrollTrigger);
  const heroTl = gsap.timeline();
  heroTl
    .from('h1 div .line ', { delay: 1, duration: 0.3, y: '100%', stagger: 0.1, rotation: 7, transformOrigin: 'left 0%' })
    .from('.hero-slider', { duration: 1.5, opacity: 0 });
}

_event.siteIsLoaded(()=>{
  if (isRootPage("pro")) {
    init();
  }
})


