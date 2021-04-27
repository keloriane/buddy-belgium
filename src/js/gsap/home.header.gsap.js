import { gsap } from 'gsap/dist/gsap';
import {_event} from "../events";
import {isCurrentPageIndex, isRootPage} from "../helpers";

function  init(){
  const lines = document.querySelectorAll('.line-span');
  gsap.from(lines, { stagger: 0.05, duration: 0.8, y: 200, rotation: 4, ease: 'Power4.easOut' });
}

_event.siteIsLoaded(function (){
  if (isRootPage("pro")) {
    init()
  }
})

