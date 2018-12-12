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

if ($('.gif').length > 0) {
  Gifffer();
}

$(document).on('click', '.gifffer-play-button', function (e) {
  $('.gif').each(function (index, value) {
    if ($(value).children(this)) {
      $(value).parents('.single-card__top').find('.single-card__overlay').addClass('event-none');
    }
  });
});

$(document).on('click', '.gif img', function (e) {
  $(this).parents('.single-card__top').find('.single-card__overlay').removeClass('event-none');
});

if ($('.js-detail').length > 0) {
  var container = $('.container');
  var width = container.css('width');
  var offsetNormal = container.offset().left + parseInt(container.css('paddingLeft'));
  $('.js-detail').css('width', width);
  $(document).on('click', '.js-btn-detail', function (e) {
    e.preventDefault();
    var item = $(this).parents('.js-detail-wrap').find('.js-detail');
    $('.js-detail').not(item).slideUp();
    if (!item.hasClass('done')) {
      item.slideToggle({
        start: function start() {
          var marginLeft = ($(this).offset().left - offsetNormal) * -1 + 'px';
          $(this).css('marginLeft', marginLeft);
          $(this).addClass('done');
        }
      });
    } else {
      item.slideToggle();
    }
  });
}

if ($('.js-detail-close').length > 0) {
  $(document).on('click', '.js-detail-close', function () {
    $(this).parents('.js-detail').slideUp();
  });
}
//# sourceMappingURL=script.js.map
