document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".header__burger");
  const nav = document.querySelector(".nav");
  const closeNav = document.querySelector(".nav__close");
  const footerList = document.querySelectorAll(".footer__list-heading");

  burgerButton.addEventListener("click", function (e) {
    e.preventDefault();
    nav.classList.add("nav--active");
  });

  closeNav.addEventListener("click", function (e) {
    e.preventDefault();
    nav.classList.remove("nav--active");
  });

  footerList.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      element.nextElementSibling.classList.toggle("footer__list--active");
    });
  });
});
