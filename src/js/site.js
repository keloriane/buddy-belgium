import {intro} from "./intro";
import {marques} from "./marques";


export const site = {
  _loaded: () => {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('ok ok ok')
      marques.init();
      intro.init();
    });
  },

  _beforeLeaving: () => {
    window.addEventListener('beforeunload', () => {
    });
  },

  logP: () => {
    console.log('log parcours')
  }
};


