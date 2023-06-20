/* DRAWER MENU ACTION JAVASCRIPT */
var hamburguerMenu = document.querySelector(".hamburguer-menu");
var responsiveMenu = document.querySelector(".responsive-menu");
var closeMenu = document.querySelector(".close-drawer");

responsiveMenu.style.height = screen.height;

hamburguerMenu.addEventListener("click", function () {
  responsiveMenu.style.display = "block";
  responsiveMenu.style.width = screen.width * 0.8;
});
closeMenu.addEventListener("click", function () {
  responsiveMenu.style.display = "none";
  responsiveMenu.style.width = 0;
});
