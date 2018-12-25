'use strict';

$(function () {
  var container = 0;
  $('.container').each(function (index, value) {
    if ($(value).css('height') !== '0px') {
      container = $(value);
      return false;
    }
  });
  var containerWidth = parseInt(container.css('width')) - parseInt(container.css('paddingLeft')) - parseInt(container.css('paddingRight'));
  var offsetNormal = container.offset().left + parseInt(container.css('paddingLeft'));
  $(document).on('click', '.js-openModal', function () {
    var href = $(this).data('modal');
    var modal = $(href);
    $('.modal-js').not(modal).fadeOut(300);
    $(modal).fadeIn({
      start: function start() {
        if (!$(this).hasClass('done')) {
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
            $(this).addClass('done');
          }
        }
      }
    });
    $('.modal__overlay').addClass('modal__overlay-active');
  });

  $(document).on('click', '.js-modalClose', function () {
    $('.modal').fadeOut(300);
    $('.modal__overlay').removeClass('modal__overlay-active');
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
    if ($('.nav-mobile__list--active').length > 0) {
      $('.js-nav-mobile').removeClass('nav-mobile__list--active');
      $('.js-menu-close').removeClass('menu__overlay--active');
      $(this).removeClass('mobile-btn-menu-close');
    } else {
      $('#main-menu').addClass('nav-mobile__list--active');
      $('.js-menu-close').addClass('menu__overlay--active');
      $(this).addClass('mobile-btn-menu-close');
    }
  });
  $(document).on('click', '.js-menu-close', function () {
    $('.js-nav-mobile').removeClass('nav-mobile__list--active');
    $('.js-menu-close').removeClass('menu__overlay--active');
    $('.js-btn-menu').removeClass('mobile-btn-menu-close');
  });
  $(document).on('click', '.js-menu-link', function () {
    var list = $(this).data("menulink");
    $(list).addClass('nav-mobile__list--active');
    $(this).closest('.nav-mobile__list').removeClass('nav-mobile__list--active');
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
          },
          done: function done() {
            var top = item.offset().top - 100;
            $("HTML, BODY").animate({ scrollTop: top }, 1000);
          }
        });
      } else {
        item.slideToggle({
          done: function done() {
            if (item.is(':visible')) {
              var top = item.offset().top - 100;
              $("HTML, BODY").animate({ scrollTop: top }, 1000);
            }
          }
        });
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
    $('.js-mobile-search').addClass('mobile-search-active');
  });

  $(document).on('click', '.js-search-close', function () {
    $('.js-mobile-search').removeClass('mobile-search-active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  var cols = 4;
  var gapRight = 24;
  var gapBottom = 40;
  if (width < 1200) {
    cols = 3;
  }
  if (width < 992) {
    gapRight = 20;
    gapBottom = 20;
  }
  if (width < 768) {
    cols = 2;
  }
  $cg('.masonry').masonry({
    cols: cols,
    template: TEMPLATE_FIXED_SIZE,
    width: 'auto',
    height: 'auto',
    columnGapBottom: gapBottom,
    columnGapRight: gapRight
  });
});
//# sourceMappingURL=script.js.map
