const gallery = new Swiper(".home-gallery-slider", {
  // Navigation arrows
  navigation: {
    nextEl: ".gallery-btn-next",
    prevEl: ".gallery-btn-prev",
  },
  pagination: {
    el: ".swiper-gallery-pagination",
    clickable: true,
  },
  loop: true,
  centeredSlides: true,
  effect: "coverflow",
  slidesPerView: 3,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 20,
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
