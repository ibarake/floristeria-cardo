/* DRAWER MENU ACTION JAVASCRIPT */
var hamburguerMenu = document.querySelector(".hamburguer-menu");
var responsiveMenu = document.querySelector(".responsive-menu");
var closeMenu = document.querySelector(".close-drawer");
var dropdownMenus = document.querySelectorAll(".dropdown-open");
var dropdownMenusFAQ = document.querySelectorAll("#card");
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

dropdownMenusFAQ.forEach(function (dropdownMenu) {
  dropdownMenu.addEventListener("click", function () {
    var parentLi = this.closest("#card");
    var childLi = parentLi.querySelector("option");

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

dropdownMenus.forEach(function (dropdownMenu) {
  dropdownMenu.addEventListener("click", function () {
    var parentLi = this.closest(".drawer-item-container");
    var childLi = parentLi.querySelector("dropdown-mega-menu");

    if (activeDropdown && activeDropdown !== childLi) {
      dropdownMenu.style.transform = "scaleY(1)";
      activeDropdown.style.height = "0";
    }

    if (childLi.style.height === "0px" || !childLi.style.height) {
      dropdownMenu.style.transform = "scaleY(-1)";
      childLi.style.height = childLi.scrollHeight + "px";
      activeDropdown = childLi;
    } else {
      dropdownMenu.style.transform = "scaleY(1)";
      childLi.style.height = "0";
      activeDropdown = null;
    }
  });
});

/* HERO BANNER */

// Function to handle class changes based on window width
function handleClassChange() {
  var heroTitle = document.querySelector(".hero-title");
  var productCardPrices = document.querySelectorAll(".price");
  var productCardAdcs = document.querySelectorAll(".atc-btn-text");
  if (window.innerWidth < 768) {
    productCardAdcs.forEach((productCardAdc) => {
      productCardAdc.classList.remove("subtitulo-5");
      productCardAdc.classList.add("parrafo-3");
    });
    productCardPrices.forEach((productCardPrice) => {
      productCardPrice.classList.remove("parrafo-1");
      productCardPrice.classList.add("parrafo-4");
    });
    heroTitle.classList.add("titulo-3");
    heroTitle.classList.remove("titulo-1");
  } else {
    productCardAdcs.forEach((productCardAdc) => {
      productCardAdc.classList.add("subtitulo-5");
      productCardAdc.classList.remove("parrafo-3");
    });
    productCardPrices.forEach((productCardPrice) => {
      productCardPrice.classList.add("parrafo-1");
      productCardPrice.classList.remove("parrafo-4");
    });
    heroTitle.classList.add("titulo-1");
    heroTitle.classList.remove("titulo-3");
  }
}

// Initial class assignment on page load
handleClassChange();

// Event listener for window resize
window.addEventListener("resize", handleClassChange);


/* HORIZONTAL SCROLLING DRAG JS */
const ele = document.querySelectorAll('drag-scroll');
ele.scrollTop = 100;
ele.scrollLeft = 150;

let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
    pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
};

const mouseDownHandler = function(e) {
    // Change the cursor and prevent user from selecting the text
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';
};

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
};