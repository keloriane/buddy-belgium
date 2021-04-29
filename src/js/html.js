import {gsap} from "gsap/dist/gsap";
import {isRootPage} from "./helpers";

export const html = {
  removeClass(el, className) {
    el.classList.remove(className);
  },

  addClass(el, className) {
    el.classList.add(className);
  },

  setInner(el, content) {
    el.innerHTML = content;
  },

  getValue(event) {
    return event.target.value
  }
};


