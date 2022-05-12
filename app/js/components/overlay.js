$(function () {
  // Закрытиe мобильного меню по клику на якоря оверлэй
  $('.overlay').on('click', function () {
    $('.mobile-menu').removeClass('mobile-menu--active');
    $('.overlay').removeClass('overlay--active');
    $('.menu').removeClass('menu--active');
    $('.catalog__filters').removeClass('catalog__filters--active');
    $('.catalog-mobile').removeClass('catalog-mobile--active');
  });
});