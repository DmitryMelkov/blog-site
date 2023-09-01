import Swiper, { Pagination, Autoplay } from 'swiper';

export function usefulSlider() {
  var swiper = new Swiper('.community__useful-slider', {
    modules: [Pagination, Autoplay],
    slidesPerView: 5,
    spaceBetween: 20,
    speed: 500,

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.community__useful-slider-pagination',
      clickable: true,
    },
  });
}
