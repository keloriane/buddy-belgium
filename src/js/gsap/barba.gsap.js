import barba from "@barba/core";
import {animationLoader} from "./loader.gsap";
import {animationAbout} from "./about.gsap";
import {animationHome} from "./home.gsap";
import {delay} from "../helpers";

barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
    },
    enter(data) {

    }
  }],
  views: [{
    namespace: 'about',
    afterEnter(data) {

    },
    beforeEnter(data) {

    }
  },
    {
      namespace: 'home',
      afterEnter(data) {

      },
      beforeEnter(data) {

      }
    }
  ]
});

barba.hooks.before(() => {

});
barba.hooks.after(() => {

});
barba.hooks.enter(() => {

});
