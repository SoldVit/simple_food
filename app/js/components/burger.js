 $(function () {

   // Кнопка открыть мобильное меню
   $('.burger').on('click', function () {
     $('.mobile-menu').toggleClass('mobile-menu--active');
     $('.overlay').toggleClass('overlay--active');
     $('.menu').toggleClass('menu--active');
     $('#header').toggleClass('header--active');
   });

   // Кнопка закрыть мобильное меню
   $('.burger--close').on('click', function () {
     $('.mobile-menu').removeClass('mobile-menu--active');
     $('.catalog-mobile').removeClass('catalog-mobile--active');
     $('.catalog__filters').removeClass('catalog__filters--active');
     $('.overlay').removeClass('overlay--active');
     $('.menu').removeClass('menu--active');
   });

 });