if ($('.gif').length > 0) {
  Gifffer();
}

$(document).on('click', '.gifffer-play-button', function(e) {
  $('.gif').each(function (index, value) {
    if ($(value).children(this)) {
      $(value).parents('.single-card__top').find('.single-card__overlay').addClass('event-none');
    }
  });
});

$(document).on('click', '.gif img', function(e) {
  $(this).parents('.single-card__top').find('.single-card__overlay').removeClass('event-none');
});
