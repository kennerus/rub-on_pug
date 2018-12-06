'use strict';

$(function () {
  $(document).on('click', '.js-openLocationModal', function () {
    $('.js_locationModal').fadeIn(400).css('display', 'flex');
  });

  $(document).on('click', '.js-modalClose', function () {
    $('.modal').fadeOut(400);
  });

  $(document).on('mouseenter', '.js-showCategoryList', function () {
    $(this).find('.header-nav__dropdown').slideDown(0).css('display', 'flex');
    $(this).find('.header-nav__link').addClass('header-nav__link-hover');
  });

  $(document).on('mouseleave', '.js-showCategoryList', function () {
    $(this).find('.header-nav__dropdown').slideUp(0);
    $(this).find('.header-nav__link').removeClass('header-nav__link-hover');
  });

  $(document).on('click', '.js-nextCategories', function () {
    $('.header-nav__wrap').toggleClass('header-nav__wrap_move');
    $(this).toggleClass('rotateCategoryBtn');
  });
});
//# sourceMappingURL=script.js.map
