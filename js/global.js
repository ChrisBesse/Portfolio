// Background Blob
const blob = document.querySelector(".blob");

document.body.addEventListener("mousemove", (e) => {
  blob.animate(
    {
      left: `${e.clientX}px`,
      top: `${e.clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
});

// Changing Header properties when scrolling
const header = document.querySelector(".header");

window.onscroll = function () {
  let top = window.scrollY;

  if (top >= 100) {
    header.classList.add("header--active");
  } else {
    header.classList.remove("header--active");
  }
};

// Dark/Light Theme
const DarkLightBtn = document.querySelector(".header__theme");

DarkLightBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Sidebar

const sidebar = document.querySelector(".header__links");
const sidebarBtn = document.querySelector(".header__nav--toggle");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("header__links--active");
});
