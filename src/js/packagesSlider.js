const packagesText = document.querySelectorAll(".package-name");
const packagesIcon = document.querySelectorAll(".package-icon");

const packageSlider = new Swiper(".package-slider", {
  // Navigation arrows
  navigation: {
    nextEl: ".prev-package-btn",
    prevEl: ".next-package-btn",
  },
  slidesPerView: 1,
  spaceBetween: 50,
  initialSlide: 1,
});

packageSlider.on("slideChange", function () {
  packagesText.forEach((text, index) => {
    text.classList.add("text-gray-500", "lg:text-xl", "text-lg");
    text.classList.remove("text-xl", "lg:text-3xl", "text-white");
    if (index === packageSlider.activeIndex) {
      text.classList.add("text-xl", "lg:text-3xl", "text-white");
      text.classList.remove("text-gray-500", "lg:text-xl", "text-lg");
    }
  });

  packagesIcon.forEach((icon, index) => {
    icon.classList.add("fill-gray-500");
    icon.classList.remove("fill-[#FCC342]");
    if (index === packageSlider.activeIndex) {
      icon.classList.add("fill-[#FCC342]");
      icon.classList.remove("fill-gray-500");
    }
  });
});
