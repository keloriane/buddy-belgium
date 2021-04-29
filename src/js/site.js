²/*import { home } from './home';*/
import { intro } from './intro';
import { marques } from './marques';
import { category } from './category';
<<<<<<< HEAD
/*import { single_product } from './single_product';*/
=======
>>>>>>> parent of b69735b... single added

export const site = {
  _loaded: () => {
    document.addEventListener('DOMContentLoaded', () => {
      /*      home.init();*/
      intro.init();
      marques.init();
      category.init();
<<<<<<< HEAD
      /* single_product.init()*/
=======
>>>>>>> parent of b69735b... single added
    });
  },

  _beforeLeaving: () => {
    window.addEventListener('beforeunload', () => {});
  },
};
