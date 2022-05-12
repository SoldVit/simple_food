$(function () {
  // RangeSlider
  var $range = $(".filter-price__range");
  var $inputFrom = $(".filter-price__from");
  var $inputTo = $(".filter-price__to");
  var instance;
  var min = 0;
  var max = 1300;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);

  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });

  // Стили для селекта
  $('.sort__select').styler();

  // Закрыть мобильное меню по esc
  $("body").keyup((e) => {
    if (e.keyCode === 27) {
      $('.mobile-menu').removeClass('mobile-menu--active');
      $('.overlay').removeClass('overlay--active');
      $('.menu').removeClass('menu--active');
      $('.catalog-mobile').removeClass('catalog-mobile--active');
      $('.catalog__filters').removeClass('catalog__filters--active');
    }
  });

  //  Закрыть мобильное меню по клику на якоря
  $('.mobile-menu__link').on('click', function () {
    $('.mobile-menu').removeClass('mobile-menu--active');
    $('.overlay').removeClass('overlay--active');
    $('.menu').removeClass('menu--active');
  });

  //  Закрыть каталог мобильное меню по клику на якоря
  $('.filter-group__link').on('click', function () {
    $('.catalog__filters').removeClass('catalog__filters--active');
    $('.overlay').removeClass('overlay--active');
    $('.catalog-mobile').removeClass('catalog-mobile--active');
  });

  // Поиск
  $('.user-nav__btn').on('click', function () {
    $('.user-nav__input').addClass('user-nav__input--active');
  });

  // Открыть фильтр категории
  $('.catalog__btn-mobile').on('click', function () {
    $('.catalog-mobile').toggleClass('catalog-mobile--active');
    $('.catalog__filters').toggleClass('catalog__filters--active');
      $('.overlay').toggleClass('overlay--active');
  });

  // Закрыть поиск по клику в любом месте документа
  $(document).on('mouseup', function (e) {
    let s = $('.user-nav__input--active');
    if (!s.is(e.target) && s.has(e.target).length === 0) {
      s.removeClass('user-nav__input--active');
    }
  });

  // Активный статус меню
  $('.menu__link').on('click', function () {
    $('.menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
  });

  // Скрол для якорей
  $('.menu__link, .mobile-menu__link').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 400,
      easing: "linear"
    });
    return false;
  });

  // Липкое меню
  var header = $('.header'),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 50 && scrolled > scrollPrev) {
      $('.header').addClass('header--scroll');
    } else {
      $('.header').removeClass('header--scroll');
    }
    scrollPrev = scrolled;
  });

  // Микситап
  var mixer = mixitup('.categories__items, .catalog__content');

  // Слик комментарии пользователей
  $('.reviews__slider').slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '.reviews__btn--left',
    nextArrow: '.reviews__btn--right',
    dotsClass: 'dots reviews__dots'
  });

  // Мобильный слик - рестораны
  var handleMatchMedia = function (mediaQuery) {
      if (mediaQuery.matches) {
        $('.restaurants__items').slick({
          dots: true,
          arrows: false,
          fade: true,
          autoplay: true,
          autoplaySpeed: 2000,
          dotsClass: 'dots restaurants__dots'
        });
      } else {
        $('.restaurants__items').slick('unslick')
      }
    },
    mql = window.matchMedia('all and (max-width: 640px)');
  handleMatchMedia(mql);
  mql.addListener(handleMatchMedia);

  // Мобильный слик - Акици и скидки
  var handleMatchMedia = function (mediaQuery) {
      if (mediaQuery.matches) {
        $('.discounts__items').slick({
          dots: true,
          arrows: false,
          fade: true,
          autoplay: true,
          autoplaySpeed: 2000,
          dotsClass: 'dots restaurants__dots'
        });
      } else {
        $('.discounts__items').slick('unslick')
      }
    },
    mql = window.matchMedia('all and (max-width: 640px)');
  handleMatchMedia(mql);
  mql.addListener(handleMatchMedia);
});
