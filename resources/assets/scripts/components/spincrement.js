import './jquery.spincrement2.min'

class Spincrement {

  constructor () {
    this.selector = '.spincrement'
    this.duration = 6000
  }

  init () {
    let self = this
    $(this.selector).each(function () {
      $(window).scroll(() => {
        const parent = $(this).attr('data-parent')
        let parentOffset = $(this).attr('data-parent-offset')
        if (typeof parentOffset === 'undefined') {
          parentOffset = 0
        }
        let offsetTop = $(this)
          .closest(parent)
          .offset()
          .top
        let topobgj = offsetTop - parseInt(parentOffset);
        let scrol = pageYOffset;
        if (topobgj < scrol) {
          $(this).spincrement({
            duration: self.duration,
          });
        }
      });
    })
  }

}

export default new Spincrement
