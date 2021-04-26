import { Swiper } from 'swiper';
import {includeJs, isRootPage} from './helpers';

export const home = {
  init() {
    console.log("pro",includeJs('pro', true));
    if (isRootPage('pro')) {
      console.log('im Roooooot')
    }
  }
};
