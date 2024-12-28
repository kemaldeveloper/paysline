import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

export const initCategoriesSLider = () => {
  const sliders = document.querySelectorAll('.categories__slider');

  sliders.forEach(function (item, i) {
    const swiper = new Swiper(item, {
      modules: [Pagination],
      slidesPerView: 1,
      autoHeight: true,
      spaceBetween: 3,
      on: {
        init: function () {
          const paginationButtons = document.querySelectorAll('.categories__pagination button');
          paginationButtons.forEach((button, index) => {
            button.addEventListener('click', () => swiper.slideTo(index));
          });
        },
        slideChange: function () {
          const activeIndex = swiper.activeIndex;
          document.querySelectorAll('.categories__pagination button').forEach((button, index) => {
            button.classList.toggle('active', index === activeIndex);
          });
        },
      },
    });
  });
};
