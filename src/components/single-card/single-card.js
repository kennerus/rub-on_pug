if ($('.js-detail').length > 0) {
  let container = $('.container');
  let width = parseInt(container.css('width')) - parseInt(container.css('paddingLeft')) - parseInt(container.css('paddingRight'));
  let offsetNormal = container.offset().left + parseInt(container.css('paddingLeft'));
  $('.js-detail').css('width', width + 'px');
  $(document).on('click', '.js-btn-detail', function(e) {
    e.preventDefault();
    let item = $(this).parents('.js-detail-wrap').find('.js-detail');
    $('.js-detail').not(item).slideUp();
    if (!item.hasClass('done')) {
      item.slideToggle({
        start: function() {
          let thisOffset = $(this).offset().left - offsetNormal;
          let marginLeft = thisOffset * -1 + 'px';
          let parentWidth = parseInt($(this).parents('.js-detail-wrap').css('width'));
          $(this).css('marginLeft', marginLeft);
          $(this).addClass('done');
          $('.single-card__detail-tr', this).css('left', thisOffset + parentWidth / 2 - 12 + 'px');
          if ($('.single-card__slider', this).length > 0) {
            $('.single-card__slider', this).slick({
              slidesToShow: 5,
              nextArrow: '<button class="single-card__next">\n' +
                '            <svg>\n' +
                '              <use xlink:href="assets/images/svg.svg#arrow">\n' +
                '              </use>\n' +
                '            </svg>\n' +
                '          </button>',
              prevArrow: '<button class="single-card__prev">\n' +
                '            <svg>\n' +
                '              <use xlink:href="assets/images/svg.svg#arrow">\n' +
                '              </use>\n' +
                '            </svg>\n' +
                '          </button>',
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 5
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 420,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ]
            });
          }
        }
      });
    }
    else {
      item.slideToggle();
    }
  });
}

if ($('.js-detail-close').length > 0) {
  $(document).on('click', '.js-detail-close', function() {
    $(this).parents('.js-detail').slideUp();
  });
}
