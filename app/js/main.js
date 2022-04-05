$(function () {




  $('.user-nav__btn').on('click', function () {
    $('.user-nav__btn').toggleClass('user-nav__btn--active');
    $('.user-nav__input').toggleClass('user-nav__input--active');
    $('.user-nav__link').toggleClass('user-nav__link--active');
  });

  $('.user-nav__btn').on('click', function () {
    $('.user-nav__btn').removeClass('menu__link--active');
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



  var mixer = mixitup('.categories__items');

  $('.reviews__slider').slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: ".reviews__arrow--left",
    nextArrow: ".reviews__arrow--right"
  });
});