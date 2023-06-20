/* DRAWER MENU ACTION JAVASCRIPT */
var hamburguerMenu = document.querySelector(".hamburguer-menu");
var responsiveMenu = document.querySelector(".responsive-menu");
var closeMenu = document.querySelector(".close-drawer");
var dropdownMenu = document.querySelector(".dropdown-open");

responsiveMenu.style.height = screen.height;

hamburguerMenu.addEventListener("click", function () {
  responsiveMenu.style.display = "flex";
  responsiveMenu.style.opacity = 1;
  responsiveMenu.style.width = screen.width * 0.8;
});
dropdownMenu.addEventListener("click", function () {});
closeMenu.addEventListener("click", function () {
  responsiveMenu.style.width = 0;
  responsiveMenu.style.opacity = 0;
  responsiveMenu.style.display = "none";
});

dropdownMenu.addEventListener("click", function () {
  var parentLi = this.closest(".drawer-item");
  var childLi = parentLi.querySelector(".dropdown-mega-menu");

  if (childLi.style.height === "0px") {
    childLi.style.height = childLi.scrollHeight + "px";
  } else {
    childLi.style.height = "0";
  }
});
