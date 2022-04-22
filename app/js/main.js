$(function () {

  // Закрыть мобильное меню по esc
  $("body").keyup((e) => {
    if (e.keyCode === 27) {
      $('.mobile-menu').removeClass('mobile-menu--active');
      $('.overlay').removeClass('overlay--active');
      $('.menu').removeClass('menu--active');
    }
  });

  // Кнопка открыть мобильное меню
  $('.header__btn').on('click', function () {
    $('.mobile-menu').addClass('mobile-menu--active');
    $('.overlay').addClass('overlay--active');
    $('.menu').addClass('menu--active');
  });

  // Кнопка закрыть мобильное меню
  $('.mobile-menu__btn').on('click', function () {
    $('.mobile-menu').removeClass('mobile-menu--active');
    $('.overlay').removeClass('overlay--active');
    $('.menu').removeClass('menu--active');
  });

  // Оверлэй
  $('.overlay').on('click', function () {
    $('.mobile-menu').removeClass('mobile-menu--active');
    $('.overlay').removeClass('overlay--active');
    $('.mobile-menu').removeClass('mobile-menu--active');
    $('.menu').removeClass('menu--active');
  });

  // Поиск
  $('.user-nav__btn').on('click', function () {
    $('.user-nav__btn').toggleClass('user-nav__btn--active');
    $('.user-nav__input').toggleClass('user-nav__input--active');
    $('.user-nav__link').toggleClass('user-nav__link--active');
    $('.user-nav__btn').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
  });

  // Закрыть поиск по клику в любом месте документа
  $(document).on('mouseup', function (e) {
    let s = $('.user-nav__input--active');
    if (!s.is(e.target) && s.has(e.target).length === 0) {
      s.removeClass('user-nav__input--active');
    }
  });

  // Скрол для якорей
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

  // Микситап
  var mixer = mixitup('.categories__items');

  // Слик комментарии пользователей
  $('.reviews__slider').slick({
    dots: true,
    arrows: true,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: '.reviews__btn--left',
    nextArrow: '.reviews__btn--right',
    dotsClass: 'dots reviews__dots'
  });

  // Мобильный слик - рестораны
  $(document).ready(function () {
    if (window.matchMedia("(max-width: 640px)").matches) {
      $('.restaurants__items').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: 'dots restaurants__dots'
      });
    }
  });

});