const btn = document.querySelector("nav button");
const navcon = document.querySelector(".navcon");
const icon = document.querySelector("nav .bx");

btn.addEventListener("click", () => {
  navcon.classList.toggle("hidden");
  icon.classList.toggle("bx-menu");
  icon.classList.toggle("bx-x");
});

window.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});
