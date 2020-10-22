//eslint-disable-next-line no-unused-vars
import Swiper from 'swiper/swiper-bundle';
export default {
  init() {
    //eslint-disable-next-line no-unused-vars
    if ($('.colours-slider').hasClass('colours-slider')) {
      //eslint-disable-next-line no-unused-vars
      var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        initialSlide: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
