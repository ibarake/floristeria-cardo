/* DRAWER MENU ACTION JAVASCRIPT */
var hamburguerMenu = document.querySelector(".hamburguer-menu");
var responsiveMenu = document.querySelector(".responsive-menu");
var closeMenu = document.querySelector(".close-drawer");
var dropdownMenus = document.querySelectorAll(".dropdown-open");
var activeDropdown = null;

responsiveMenu.style.height = screen.height;

hamburguerMenu.addEventListener("click", function () {
  responsiveMenu.style.right = "auto";
  responsiveMenu.style.left = 0;
  responsiveMenu.style.width = screen.width * 0.8;
});

closeMenu.addEventListener("click", function () {
  responsiveMenu.style.right = "110%";
  responsiveMenu.style.left = "auto";

  if (activeDropdown) {
    activeDropdown.style.height = "0";
    activeDropdown = null;
  }
});

dropdownMenus.forEach(function (dropdownMenu) {
  dropdownMenu.addEventListener("click", function () {
    var parentLi = this.closest(".drawer-item-container");
    var childLi = parentLi.querySelector("dropdown-mega-menu");

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

/* HERO BANNER */

// Function to handle class changes based on window width
function handleClassChange() {
  var heroTitle = document.querySelector(".hero-title");
  var productCardPrice = document.querySelector(".price");
  var productCardAdc = document.querySelector(".atc-btn-text");
  if (window.innerWidth < 768) {
    productCardAdc.classList.remove("subtitulo-5");
    productCardAdc.classList.add("parrafo-3");
    productCardPrice.classList.remove("parrafo-1");
    productCardPrice.classList.add("parrafo-4");
    heroTitle.classList.add("titulo-3");
    heroTitle.classList.remove("titulo-1");
  } else {
    heroTitle.classList.add("titulo-1");
    heroTitle.classList.remove("titulo-3");
  }
}

// Initial class assignment on page load
handleClassChange();

// Event listener for window resize
window.addEventListener("resize", handleClassChange);
