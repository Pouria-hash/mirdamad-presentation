const menusText = document.querySelectorAll(".menu-text");
const menusIconWhite = document.querySelectorAll(".menu-icon-white");
const menusIconGold = document.querySelectorAll(".menu-icon-gold");

const foodMenuSlider = new Swiper(".food-menu-slider", {
  // Navigation arrows
  navigation: {
    nextEl: ".next-menu-btn",
    prevEl: ".prev-menu-btn",
  },
  slidesPerView: 1,
  spaceBetween: 50,
  initialSlide: 1,
});

foodMenuSlider.on("slideChange", function () {
  menusText.forEach((text, index) => {
    text.classList.add("text-gray-500", "lg:text-xl", "text-lg");
    text.classList.remove("text-2xl", "lg:text-4xl", "text-white");
    if (index === foodMenuSlider.activeIndex) {
      text.classList.add("text-2xl", "lg:text-4xl", "text-white");
      text.classList.remove("text-gray-500", "lg:text-xl", "text-lg");
    }
  });

  menusIconWhite.forEach((whiteIcon, index) => {
    whiteIcon.classList.add("flex");
    whiteIcon.classList.remove("hidden");
    if (index === foodMenuSlider.activeIndex) {
      whiteIcon.classList.add("hidden");
      whiteIcon.classList.remove("flex");
    }
  });
  menusIconGold.forEach((goldIcon, index) => {
    goldIcon.classList.add("hidden");
    goldIcon.classList.remove("flex");
    if (index === foodMenuSlider.activeIndex) {
      goldIcon.classList.add("flex");
      goldIcon.classList.remove("hidden");
    }
  });
});
