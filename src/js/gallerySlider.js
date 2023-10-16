const gallery = new Swiper(".gallery-slider", {
  // Navigation arrows

  loop: true,
  centeredSlides: true,
  effect: "coverflow",
  slidesPerView: 2,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 20,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    // when window width is >= 480px

    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
});
