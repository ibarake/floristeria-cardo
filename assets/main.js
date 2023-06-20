/* DRAWER MENU ACTION JAVASCRIPT */
var hamburguerMenu = document.querySelector(".hamburguer-menu");
var responsiveMenu = document.querySelector(".responsive-menu");
var closeMenu = document.querySelector(".close-drawer");

responsiveMenu.style.height = screen.height;

hamburguerMenu.addEventListener("click", function () {
  responsiveMenu.style.display = "flex";
  responsiveMenu.style.opacity = 1;
  responsiveMenu.style.width = screen.width * 0.8;
});
closeMenu.addEventListener("click", function () {
  responsiveMenu.style.width = 0;
  responsiveMenu.style.opacity = 0;
  responsiveMenu.style.display = "none";
});
