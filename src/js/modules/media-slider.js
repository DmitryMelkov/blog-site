import Swiper, { Autoplay } from 'swiper';

export function mediaSlider() {
  var swiper = new Swiper('.community__media-slider', {
    modules: [Autoplay],
    slidesPerView: 4,
    spaceBetween: 27,
    speed: 500,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
}
