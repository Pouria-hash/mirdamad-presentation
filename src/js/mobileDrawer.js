const showDrawerBtn = document.getElementById("showDrawerBtn");
const hideDrawerBtn = document.getElementById("hideDrawerBtn");
const body = document.querySelector("body");
const drawer = document.querySelector(".drawer");

function handleShowDrawer() {
  drawer.classList.remove("w-0", "invisible", "opacity-0");
  drawer.classList.add("w-3/4", "visible", "opacity-100");
  if (drawer.classList.contains("w-3/4")) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
}
function handleHideDrawer() {
  drawer.classList.remove("w-3/4", "visible", "opacity-100");
  drawer.classList.add("w-0", "invisible", "opacity-0");
  if (drawer.classList.contains("w-3/4")) {
    // Disable scroll
    body.style.overflow = "hidden";
  } else {
    // Enable scroll
    body.style.overflow = "auto";
  }
}

showDrawerBtn.addEventListener("click", handleShowDrawer);
hideDrawerBtn.addEventListener("click", handleHideDrawer);
