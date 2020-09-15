import Headroom from 'headroom.js'
import AOS from 'aos'
import '../components/spincrement'

export default {
  init() {
    AOS.init({
      duration: 1200,
    })
    $('.spincrement').spincrement({
      // fade: false,
      duration: 4000,
      thousandSeparator: '',
    });
    var headroom  = new Headroom(document.querySelector('nav'));
    headroom.init();
    $('.nav__burger').click(function() {
      $('.nav').css('position', 'relative')
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
