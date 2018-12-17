'use strict';

$(function () {
  var container = $('.container');
  var containerWidth = parseInt(container.css('width')) - parseInt(container.css('paddingLeft')) - parseInt(container.css('paddingRight'));
  var offsetNormal = container.offset().left + parseInt(container.css('paddingLeft'));
  $(document).on('click', '.js-openLocationModal', function () {
    $('.js-locationModal').fadeIn(400).css('display', 'flex');
  });

  $(document).on('click', '.js-modalClose', function () {
    $('.modal').fadeOut(400);
  });
  $(document).on('mouseenter', '.js-showCategoryList', function () {
    var drop = $(this).find('.header-nav__dropdown');
    drop.slideDown({
      duration: 0,
      start: function start() {
        $(this).css('display', 'flex');
        if (!$(this).hasClass('done')) {
          if ($(this).offset().left - offsetNormal + $(this).width() > containerWidth - 29) {
            $(this).css({
              left: containerWidth - $(this).width() - 29
            });
          }
          $(this).addClass('done');
        }
      }
    });
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
      prevArrow: '<button class="header-nav__next rotateCategoryBtn">\n' + '            <svg>\n' + '              <use xlink:href="assets/images/svg.svg#arrow">\n' + '              </use>\n' + '            </svg>\n' + '          </button>'
    });
    if (document.documentElement.clientWidth < 1200) {
      $('.header-nav__wrap').slick('unslick');
    }
  }
  $(document).on('click', '.js-btn-menu', function () {
    $('.header-nav').toggleClass('header-nav--active');
    $('.js-menu-close').toggleClass('menu__overlay--active');
    $(this).toggleClass('header-nav__btn-close');
  });
  $(document).on('click', '.js-menu-close', function () {
    $(this).removeClass('menu__overlay--active');
    $('.header-nav').toggleClass('header-nav--active');
    $('.js-btn-menu').toggleClass('header-nav__btn-close');
  });
  if ($('.js-detail').length > 0) {
    $('.js-detail').css('width', containerWidth + 'px');
    $(document).on('click', '.js-btn-detail', function (e) {
      e.preventDefault();
      var item = $(this).parents('.js-detail-wrap').find('.js-detail');
      $('.js-detail').not(item).slideUp();
      if (!item.hasClass('done')) {
        item.slideToggle({
          start: function start() {
            var thisOffset = $(this).offset().left - offsetNormal;
            var marginLeft = thisOffset * -1 + 'px';
            var parentWidth = parseInt($(this).parents('.js-detail-wrap').css('width'));
            $(this).css('marginLeft', marginLeft);
            $(this).addClass('done');
            $('.single-card__detail-tr', this).css('left', thisOffset + parentWidth / 2 - 12 + 'px');
            if ($('.single-card__slider', this).length > 0) {
              $('.single-card__slider', this).slick({
                slidesToShow: 5,
                nextArrow: '<button class="single-card__next">\n' + '            <svg>\n' + '              <use xlink:href="assets/images/svg.svg#arrow">\n' + '              </use>\n' + '            </svg>\n' + '          </button>',
                prevArrow: '<button class="single-card__prev">\n' + '            <svg>\n' + '              <use xlink:href="assets/images/svg.svg#arrow">\n' + '              </use>\n' + '            </svg>\n' + '          </button>',
                responsive: [{
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4
                  }
                }, {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 5
                  }
                }, {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4
                  }
                }, {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 3
                  }
                }, {
                  breakpoint: 420,
                  settings: {
                    slidesToShow: 2
                  }
                }]
              });
            }
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
  $(document).on('click', '.gifer-play-button', function () {
    $('.gifffer-play-button').trigger('click');
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

  $(document).on('click', function (e) {
    if (!e.target.classList.contains('gifffer-play-button') && e.target.closest('.gifffer-play-button') === null) {
      $('.gif canvas').parents('.single-card__top').find('.single-card__overlay').removeClass('event-none');
    }
  });

  $(document).on('click', '.js-search-open', function () {
    $('.global-search').addClass('global-search--active');
  });

  $(document).on('click', '.js-search-close', function () {
    $('.global-search').removeClass('global-search--active');
  });
});
//# sourceMappingURL=script.js.map
