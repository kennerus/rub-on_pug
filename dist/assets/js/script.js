'use strict';

$(function () {
  $(document).on('click', '.js-openLocationModal', function () {
    $('.js-locationModal').fadeIn(400).css('display', 'flex');
  });

  $(document).on('click', '.js-modalClose', function () {
    $('.modal').fadeOut(400);
  });

  $(document).on('mouseenter', '.js-showCategoryList', function () {
    $(this).find('.header-nav__dropdown').slideDown(0).css('display', 'flex');
    $(this).find('.header-nav__link').addClass('header-nav__link-hover');
    $(this).closest('.header-nav__wrap').css('zIndex', 100);
  });

  $(document).on('mouseleave', '.js-showCategoryList', function () {
    $(this).find('.header-nav__dropdown').slideUp(0);
    $(this).find('.header-nav__link').removeClass('header-nav__link-hover');
    $(this).closest('.header-nav__wrap').css('zIndex', 0);
  });
  if ($('.header-nav__wrap')) {
    $('.header-nav__wrap').on('afterChange', function (event, slick, currentSlide) {
      if (slick.slideCount / currentSlide < 2) {
        slick.$nextArrow.css('display', 'none');
      } else if (currentSlide === 0) {
        slick.$nextArrow.css('display', 'flex');
      }
    }).slick({
      variableWidth: true,
      infinite: false,
      slidesToScroll: 7,
      nextArrow: '<button class="header-nav__next">\n' + '            <svg>\n' + '              <use xlink:href="assets/images/svg.svg#arrow">\n' + '              </use>\n' + '            </svg>\n' + '          </button>',
      prevArrow: '<button class="header-nav__next rotateCategoryBtn">\n' + '            <svg>\n' + '              <use xlink:href="assets/images/svg.svg#arrow">\n' + '              </use>\n' + '            </svg>\n' + '          </button>',
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToScroll: 6
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToScroll: 1
        }
      }]
    });
  }
});
//# sourceMappingURL=script.js.map
