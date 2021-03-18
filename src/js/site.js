import {intro} from "./intro";
import {marques} from "./marques";
import {baseUrl} from "./helpers";


export const site = {
  _loaded: () => {
    document.addEventListener('DOMContentLoaded', () => {
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


