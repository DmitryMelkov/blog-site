import Swiper, { Pagination} from 'swiper';

export function blogItemSlider() {
  var swiper = new Swiper('.blog-item__slider', {
    modules: [Pagination],
    pagination: {
      el: '.blog-item__slider-pagination',
      clickable: true,
    },
  });
}
