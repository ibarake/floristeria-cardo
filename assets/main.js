/* DRAWER MENU ACTION JAVASCRIPT */

document.addEventListener("DOMContentLoaded", function () {
  var hamburgerMenu = document.querySelector(".hamburger-menu");
  var responsiveMenu = document.querySelector(".responsive-menu");
  var closeMenu = document.querySelector(".close-drawer");

  hamburgerMenu.addEventListener("click", function () {
    responsiveMenu.style.display = "block";
  });
  closeMenu.addEventListener("click", function () {
    responsiveMenu.style.display = "none";
  });
});
