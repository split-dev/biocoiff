import Headroom from 'headroom.js'
export default {
  init() {
    var headroom  = new Headroom(document.querySelector('nav'));
    headroom.init();
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
