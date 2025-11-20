import "./scss/main.scss";

document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".header__burger");
  const nav = document.querySelector(".nav");
  const closeNav = document.querySelector(".nav__close");

  burgerButton.addEventListener("click", function (e) {
    e.preventDefault();
    nav.classList.add("nav--active");
  });

  closeNav.addEventListener("click", function (e) {
    e.preventDefault();
    nav.classList.remove("nav--active");
  });
});
