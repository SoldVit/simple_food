$(function () {

  $('.user-nav__btn').on('click', function () {
    $('.user-nav__btn').toggleClass('user-nav__btn--active');
    $('.user-nav__input').toggleClass('user-nav__input--active');
    $('.user-nav__link').toggleClass('user-nav__link--active');
  });

  $(document).on('mouseup', function (e) {
    let s = $('.user-nav__btn.user-nav__btn--active');
    if (!s.is(e.target) && s.has(e.target).length === 0) {
      s.removeClass('user-nav__btn--active');
    }
  });

  $(document).on('mouseup', function (e) {
    let s = $('.user-nav__link.user-nav__link--active');
    if (!s.is(e.target) && s.has(e.target).length === 0) {
      s.removeClass('user-nav__link--active');
    }
  });

  $(document).on('mouseup', function (e) {
    let s = $('.user-nav__input.user-nav__input--active');
    if (!s.is(e.target) && s.has(e.target).length === 0) {
      s.removeClass('user-nav__input--active');
    }
  });

  $('.menu__link').on('click', function () {
    $('.menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
  });

  $('.menu__link').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 400, 
      easing: "linear" 
    });

    return false;
  });

  var mixer = mixitup('.product');
});