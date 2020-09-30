//eslint-disable-next-line no-unused-vars
import Swiper from 'swiper/swiper-bundle';
export default {
  init() {
    //eslint-disable-next-line no-unused-vars
    if ($('.colours-slider').hasClass('colours-slider')) {
      var Swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
   let slide = false;
    $('.swiper-button-next').click(function () {
      if (slide) {
        Swiper.slideTo(0);
      } else {
        Swiper.slideNext();
      }
    });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
