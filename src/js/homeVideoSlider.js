const videos = new Swiper(".home-video-slider", {
  // Navigation arrows
  navigation: {
    nextEl: ".video-btn-next",
    prevEl: ".video-btn-prev",
  },
  loop: true,
  centeredSlides: true,
  effect: "coverflow",
  slidesPerView: 3,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
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
