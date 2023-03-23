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

// Vanilla-tilt

import VanillaTilt from "vanilla-tilt";

const projectsCardImg = document.querySelectorAll(".projects__card--img");

projectsCardImg.forEach((img) => img.setAttribute("draggable", false));

VanillaTilt.init(projectsCardImg, {
  reverse: true,
  max: 10,
  speed: 400,
  gyroscope: false,
});

// GSAP

import gsap from "gsap";

const tl = gsap.timeline({ defaults: { duration: 0.8 } });

tl.from(".header", { yPercent: "-100" })
  .from(".hero__img", {
    opacity: 0,
    x: "-20px",
  })
  .from(".hero__text > *", { opacity: 0, stagger: 0.3, x: "30px" });

// GSAP ScrollTrigger

const tl2 = gsap.timeline();

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".about__content > *", {
  duration: 1.25,
  scrollTrigger: {
    trigger: ".about",
    toggleActions: "restart none none none",
  },
  x: "-30px",
  opacity: 0,
  stagger: 1,
});

tl2
  .from(".technical__title", {
    duration: 1,
    y: "-40px",
    opacity: 0,
  })
  .from(".technical__content > *", {
    x: "-40px",
    opacity: 0,
    stagger: 0.3,
  });

ScrollTrigger.create({
  animation: tl2,
  trigger: ".technical",
  toggleActions: "restart none none none",
  scrub: 2,
  start: "20% 70%",
  end: "30% 30%",
});
