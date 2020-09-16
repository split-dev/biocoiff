import Headroom from 'headroom.js'
import AOS from 'aos'
import '../components/spincrement'
//eslint-disable-next-line no-unused-vars
import Swiper from 'swiper/swiper-bundle';
export default {
  init() {
    AOS.init({
      duration: 1200,
    })

    //eslint-disable-next-line no-unused-vars
    var swiper = new Swiper('.swiper-container', {
      effect: 'fade',
    });
    $('.card-detail__small-img').click (function () {
      $(this).toggleClass('active');
      let index = $(this).attr('data-id');
      swiper.slideTo ( index );
    });
    $('.spincrement').spincrement({
      // fade: false,
      duration: 4000,
      thousandSeparator: '',
    });
    // eslint-disable-next-line no-unused-vars
   /* var myFullpage = new fullpage('#fullpage', {
      anchors: ['Home', 'About', 'Services', 'Estimate', 'Process', 'Portfolio', 'Trusted', 'Contact'],
      verticalCentered: false,
      navigation: false,
      menu: '.menu-full',
      scrollingSpeed: 1000,
      scrollOverflow: true,
      lockAnchors: false,
      normalScrollElements: '.scrollable-content',
    })*/
    var headroom  = new Headroom(document.querySelector('nav'));
    headroom.init();
    $('.nav__burger').click(function() {
      $('.nav').css('z-index', '1')
      $('.mobile-menu').toggleClass('open-mobile');
      $('.shadow').toggleClass('show-shadow');
      $('body').toggleClass('body-hidden');
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $('.open-mobile'); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $('.nav').css('position', 'fixed')
        $('.nav').css('z-index', '9999')
        $('.mobile-menu').removeClass('open-mobile');
        $('.shadow').removeClass('show-shadow');
        $('body').removeClass('body-hidden');
      }
    });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
