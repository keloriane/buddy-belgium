import {Swiper} from 'swiper';
import {includeJs, isRootPage} from './helpers';
import {tns} from "tiny-slider/src/tiny-slider"

export const single_product = {
  init() {

    if (isRootPage('product')) {
      console.log('single_product included')

      this.configSlider();
      this.buttonSliderCustomization()
    }
  },

  configSlider() {

    console.log(document.querySelector('.single-product__main-images'));
    tns({
      container: '.single-product__main-images',
      items: 1,
      slideBy: 'page',
      mouseDrag: true,
      navContainer: '.single-product__thumbnails',
      navAsThumbnails: true,
      arrowKeys: true,
    });

    tns({
      container: '.single-product__thumbnails',
      items:5,
      gutter: 5,
      arrowKeys: true,
      mouseDrag: true,
      touch: true,
      rewind: true,
    });
  },

  buttonSliderCustomization() {
    const singleProductCarouselControls = document.querySelector('#tns2-ow .tns-controls').children
    const singleProductCarouselButtonLeft = singleProductCarouselControls.item(0);
    const singleProductCarouselButtonRight = singleProductCarouselControls.item(1);

    singleProductCarouselButtonLeft.innerHTML = '<'
    singleProductCarouselButtonRight.innerHTML = '>'
    const ButtonStyle = {
      all: 'unset',
      backgroundColor: 'green',
      borderRadius: '100%',
      height:'50px',
      width:'50px',
      textAlign:'center',
      display:'none'
    }

    Object.assign(singleProductCarouselButtonLeft.style, ButtonStyle)
    Object.assign(singleProductCarouselButtonRight.style, ButtonStyle)
  }
};
