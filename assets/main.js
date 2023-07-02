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
const elements = document.querySelectorAll('.drag-scroll');
let positions = [];
let isDragging = false;

const mouseDownHandler = function (e) {
    const target = e.target;

    // Disable dragging images
    if (target.tagName.toLowerCase() === 'img') {
        e.preventDefault();
        return;
    }

    // Disable selecting text
    if (!['a', 'button'].includes(target.tagName.toLowerCase())) {
        e.preventDefault();
    }

    const element = target.closest('.drag-scroll');
    const elementIndex = Array.from(elements).indexOf(element);

    positions[elementIndex] = {
        left: element.scrollLeft,
        top: element.scrollTop,
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    // Set the dragging flag to true
    isDragging = true;
};

const mouseMoveHandler = function (e) {
    if (!isDragging) {
        return;
    }

    positions.forEach((pos, index) => {
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        elements[index].scrollTop = pos.top - dy;
        elements[index].scrollLeft = pos.left - dx;
    });
};

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);

    // Reset the dragging flag to false
    isDragging = false;
};

elements.forEach((element) => {
    element.addEventListener('mousedown', mouseDownHandler);
    element.querySelectorAll('.product-card img').forEach((img) => {
        img.addEventListener('mousedown', (e) => e.preventDefault());
    });
    element.style.cursor = 'grab';
});

/* FAQ DROPDOWN ANIMATION */

document.addEventListener('DOMContentLoaded', function() {
  var faqTitles = document.querySelectorAll('.FAQ-title');
  var openAnswer = null; // Keeps track of the currently open answer

  faqTitles.forEach(function(title) {
    title.addEventListener('click', function() {
      var answer = this.nextElementSibling;
      toggleSlide(answer);

      // Close the previously open answer if exists
      if (openAnswer && openAnswer !== answer) {
        toggleSlide(openAnswer);
        var prevSvgElement = openAnswer.previousElementSibling.querySelector('svg');
        prevSvgElement.style.transform = 'rotate(0deg)';
      }

      // Update the currently open answer
      openAnswer = (openAnswer === answer) ? null : answer;

      // Rotate the SVG element
      var svgElement = this.querySelector('svg');
      svgElement.style.transform = (openAnswer) ? 'rotate(90deg)' : 'rotate(0deg)';
    });
  });
});


function toggleSlide(element) {
  var isHidden = getComputedStyle(element).height === '0px';
  
  if (isHidden) {
    element.style.height = 'auto';
    element.style.marginTop = '15px';
    element.style.marginBottom = '10px';
  } else {
    element.style.height = '0px';
    element.style.marginTop = '0px';
    element.style.marginBottom = '0px';
  }
}

const faqTitles = document.querySelectorAll('.FAQ-title');

faqTitles.forEach((title) => {
  let rotation = 0; // Keeps track of the rotation angle

  title.addEventListener('click', () => {
    const svgElement = title.querySelector('svg');

    // Toggle the rotation angle between 90 and 0 degrees
    rotation = (rotation === 0) ? 90 : 0;

    // Apply the rotation transformation to the SVG element
    svgElement.style.transform = `rotate(${rotation}deg)`;
  });
});



