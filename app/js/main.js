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
  $('.sort__select, .product__input').styler();

  // Закрыть по esc
  $("body").keyup((e) => {
    if (e.keyCode === 27) {
      $('.mobile-menu').removeClass('mobile-menu--active');
      $('.overlay').removeClass('overlay--active');
      $('.menu').removeClass('menu--active');
      $('.catalog-mobile').removeClass('catalog-mobile--active');
      $('.catalog__filters').removeClass('catalog__filters--active');
      $('.user-nav__input').removeClass('user-nav__input--active');
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
    $('.user-nav__input').toggleClass('user-nav__input--active');
  });

  // Открыть фильтр категории
  $('.catalog__btn-mobile').on('click', function () {
    $('.catalog-mobile').toggleClass('catalog-mobile--active');
    $('.catalog__filters').toggleClass('catalog__filters--active');
    $('.overlay').toggleClass('overlay--active');
  });

  // Активный статус меню
  $('.menu__link').on('click', function () {
    $('.menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
  });

  // Скрол для якорей
  $('.menu__link, .mobile-menu__link, .hero__btn').on('click', function () {
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

    if (scrolled > 50) {
      $('.header').addClass('header--scroll');
    } else {
      $('.header').removeClass('header--scroll');
    }
    scrollPrev = scrolled;
  });

  // Слaйдер комментарии пользователей
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

  // Слaйдер предложения
  $('.sentence__slider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToScroll: 5,
    slidesToShow: 5,
    prevArrow: '.reviews__btn--left',
    nextArrow: '.reviews__btn--right',
  });

  // Слайдер страницы продукта
  $('.product__slider').slick({
    dots: false,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [{
      breakpoint: 1150,
      settings: {
        arrows: false
      }
    }]


  });

  // --Мобильный слайдер рестораны

  // Подпишемся на ресайз и продиспатчим его для запуска
  $(window).on('resize', function (e) {
    // Переменная, по которой узнаем запущен слайдер или нет.
    // Храним её в data
    var init = $(".restaurants__items").data('init-slider');
    // Если мобильный
    if (window.innerWidth < 640) {
      // Если слайдер не запущен
      if (init != 1) {
        // Запускаем слайдер и записываем в data init-slider = 1
        $('.restaurants__items').slick({
          dots: true,
          arrows: false,
          fade: true,
          autoplay: true,
          autoplaySpeed: 2000,
          dotsClass: 'dots restaurants__dots'
        }).data({
          'init-slider': 1
        });
      }
    }
    // Если десктоп
    else {
      // Если слайдер запущен
      if (init == 1) {
        // Разрушаем слайдер и записываем в data init-slider = 0
        $('.restaurants__items').slick('unslick').data({
          'init-slider': 0
        });
      }
    }
  }).trigger('resize');


  // --Мобильный слайдер акции и скидки

  // Подпишемся на ресайз и продиспатчим его для запуска
  $(window).on('resize', function (e) {
    // Переменная, по которой узнаем запущен слайдер или нет.
    // Храним её в data
    var init = $(".discounts__items").data('init-slider');
    // Если мобильный
    if (window.innerWidth < 640) {
      // Если слайдер не запущен
      if (init != 1) {
        // Запускаем слайдер и записываем в data init-slider = 1
        $('.discounts__items').slick({
          dots: true,
          arrows: false,
          fade: true,
          autoplay: true,
          autoplaySpeed: 2000,
          dotsClass: 'dots restaurants__dots'
        }).data({
          'init-slider': 1
        });
      }
    }
    // Если десктоп
    else {
      // Если слайдер запущен
      if (init == 1) {
        // Разрушаем слайдер и записываем в data init-slider = 0
        $('.discounts__items').slick('unslick').data({
          'init-slider': 0
        });
      }
    }
  }).trigger('resize');

  // Табы на product-page
  $('.product-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');
    $('.product-content__item').removeClass('product-content__item--active');
    $($(this).attr('href')).addClass('product-content__item--active');
  });

  // Микситап - всегда ставим последним
  var mixer = mixitup('.categories__items, .catalog__content');
});