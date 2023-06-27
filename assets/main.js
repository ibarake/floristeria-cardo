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

// Dropdown Menu
var dropdown = document.querySelectorAll('.subtitulo-2');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
  var button = el.querySelector('a[data-toggle="dropdown"]'),
      menu = el.querySelector('.dropdown-menu'),
      arrow = button.querySelector('i.icon-arrow');

  button.onclick = function(event) {
    if(!menu.hasClass('show')) {
      menu.classList.add('show');
      menu.classList.remove('hide');
      arrow.classList.add('open');
      arrow.classList.remove('close');
      event.preventDefault();
    }
    else {
      menu.classList.remove('show');
      menu.classList.add('hide');
      arrow.classList.remove('open');
      arrow.classList.add('close');
      event.preventDefault();
    }
  };
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

