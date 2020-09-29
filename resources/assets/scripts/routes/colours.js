//eslint-disable-next-line no-unused-vars
import Swiper from 'swiper/swiper-bundle';
export default {
  init() {
    //eslint-disable-next-line no-unused-vars
    var mySwiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
   /* let slide = false;
    $('.btn-next').click(function () {
      if (slide) {
        mySwiper.slideTo(0);
      } else {
        mySwiper.slideNext();
      }
    });*/
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
