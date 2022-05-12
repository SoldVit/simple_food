$(function () {
  var handleMatchMedia = function (mediaQuery) {
      if (mediaQuery.matches) {
        $('.pagination').pagination({
          items: 100,
          itemsOnPage: 10,
          cssStyle: 'light-theme',
          displayedPages: '1',
          edges: '1',
        });
      } else {
        $('.pagination').pagination({
          items: 100,
          itemsOnPage: 10,
          cssStyle: 'light-theme',
          displayedPages: '2',
          edges: '2',
        });
      }
    },
    mql = window.matchMedia('all and (max-width: 640px)');
  handleMatchMedia(mql);
  mql.addListener(handleMatchMedia);
});