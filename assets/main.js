var hamburguerMenu = document.querySelector(".hamburguer-menu");
var responsiveMenu = document.querySelector(".responsive-menu");
var closeMenu = document.querySelector(".close-drawer");
var dropdownMenus = document.querySelectorAll(".dropdown-open");
var activeDropdown = null;

responsiveMenu.style.height = screen.height + "px";

hamburguerMenu.addEventListener("click", function () {
  responsiveMenu.style.display = "flex";
  responsiveMenu.classList.add("open");
});

closeMenu.addEventListener("click", function () {
  responsiveMenu.style.display = "none";
  responsiveMenu.classList.remove("open");

  if (activeDropdown) {
    activeDropdown.style.height = "0";
    activeDropdown = null;
  }
});

dropdownMenus.forEach(function (dropdownMenu) {
  dropdownMenu.addEventListener("click", function () {
    var parentLi = this.closest(".drawer-item-container");
    var childLi = parentLi.querySelector(".dropdown-mega-menu");

    if (activeDropdown && activeDropdown !== childLi) {
      activeDropdown.style.height = "0";
    }

    if (childLi.style.height === "0px" || !childLi.style.height) {
      childLi.style.height = childLi.scrollHeight + "px";
      activeDropdown = childLi;
    } else {
      childLi.style.height = "0";
      activeDropdown = null;
    }
  });
});
