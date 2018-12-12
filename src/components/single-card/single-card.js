if ($('.js-detail').length > 0) {
  let container = $('.container');
  let width = container.css('width');
  let offsetNormal = container.offset().left + parseInt(container.css('paddingLeft'));
  $('.js-detail').css('width', width);
  $(document).on('click', '.js-btn-detail', function(e) {
    e.preventDefault();
    let item = $(this).parents('.js-detail-wrap').find('.js-detail');
    $('.js-detail').not(item).slideUp();
    if (!item.hasClass('done')) {
      item.slideToggle({
        start: function() {
          let marginLeft = ($(this).offset().left - offsetNormal) * -1 + 'px';
          $(this).css('marginLeft', marginLeft);
          $(this).addClass('done');
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
