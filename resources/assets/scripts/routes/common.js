import Headroom from 'headroom.js'
import AOS from 'aos'
import '../components/spincrement'
//eslint-disable-next-line no-unused-vars
import Swiper from 'swiper/swiper-bundle';
import 'jquery-mask-plugin'
import 'aos'
export default {
  init() {
    AOS.init({
      once: true,
    });
    //eslint-disable-next-line no-unused-vars
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      cssMode: true,
      loop: false,
      mousewheel: true,
      keyboard: true,
    });
    $('.phone').mask('0 000 000 000');
    $('.mail').mask('0 000 000 000');

    var vid = document.getElementById('videoBox');

    function playVid() {
      vid.play();
    }

    function pauseVid() {
      vid.pause();
    }

    $('#slideThree').on('click', function () {
      $('.slideThree').toggleClass('slideThree__checked');
    });

    $('.partner li').click(function () {
      $(this).toggleClass('li-active')
    })
    $(document).ready(function () {
      $('.video-box__button').click(function (e) {
        $(this).removeClass('video-btn-none');
        e.preventDefault;
        if ($(this).hasClass('pause')) {
          pauseVid();
          $(this).toggleClass('pause');
        } else {
          $(this).addClass('video-btn-none');
          playVid();
          $(this).toggleClass('pause');
        }
      });
    });

    $('.card-detail__small-img').click (function () {
      $(this).toggleClass('active');
      let index = $(this).attr('data-id');
      swiper.slideTo ( index );
    });

    $('.filter__visible').click(function () {
      $(this).toggleClass('filter__active');
      $(this).next().slideToggle(400);
    });
    $('.filter__header').click(function () {
      $(this).toggleClass('filter__header-active');
      $(this).next().slideToggle(400);
    });

    $('.spincrement').spincrement({
      fade: true,
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
    $(document).ready(function () {
      $('.accordion__top').click(function (){
        $(this).next().slideToggle(400);
        $(this).toggleClass('icon');
      });
    });
    $('.card__body').hover(function () {
      $(this).next().toggleClass('visible');
    });
    var headroom  = new Headroom(document.querySelector('nav'));
    headroom.init();
    $('.nav__burger').click(function() {
      $('.nav').css('z-index', '1')
      $('.mobile-menu').toggleClass('open-mobile');
      $('.shadow').toggleClass('show-shadow');
      $('body').toggleClass('body-hidden');
    });
    $(document).mouseup(function (e){
      var div = $('.open-mobile');
      if (!div.is(e.target)
        && div.has(e.target).length === 0) {
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
