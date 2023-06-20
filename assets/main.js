document.addEventListener("DOMContentLoaded", function () {
  var hamburgerMenu = document.querySelector(".hamburger-menu");
  var responsiveMenu = document.querySelector(".responsive-menu");

  hamburgerMenu.addEventListener("click", function () {
    responsiveMenu.style.display = "block";
  });
});
