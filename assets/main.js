/* DRAWER MENU ACTION JAVASCRIPT */
var dropdownMenus = document.querySelectorAll(".dropdown-open");
var activeDropdown = null;

dropdownMenus.forEach(function (dropdownMenu) {
  dropdownMenu.addEventListener("click", function () {
    var dropdownContent = this.nextElementSibling;

    if (activeDropdown && activeDropdown !== dropdownContent) {
      toggleDropdown(activeDropdown);
    }

    toggleDropdown(dropdownContent);
    toggleIcon(this);
    activeDropdown = dropdownContent;
  });
});

function toggleDropdown(element) {
  var isHidden = getComputedStyle(element).height === "0px";

  if (isHidden) {
    element.style.height = "auto";
  } else {
    element.style.height = "0px";
  }
}

function toggleIcon(element) {
  var svgElement = element.querySelector("svg");
  var rotation = getComputedStyle(svgElement).transform;

  if (rotation === "none") {
    svgElement.style.transform = "rotate(90deg)";
  } else {
    svgElement.style.transform = "none";
  }
}


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
  var openTitle = null; // Keeps track of the currently open FAQ title

  faqTitles.forEach(function(title) {
    title.addEventListener('click', function() {
      var answer = this.nextElementSibling;

      if (openAnswer === answer) {
        // Clicking on the same FAQ title again, close the answer and rotate the SVG back
        toggleSlide(answer);
        rotateSvg(this, '0deg');
        openAnswer = null;
        openTitle = null;
      } else {
        // Clicking on a different FAQ title
        if (openAnswer) {
          // Close the previously open answer and rotate its SVG back
          toggleSlide(openAnswer);
          rotateSvg(openTitle, '0deg');
        }

        // Open the clicked answer and rotate its SVG
        toggleSlide(answer);
        rotateSvg(this, '90deg');
        openAnswer = answer;
        openTitle = this;
      }
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

function rotateSvg(title, rotation) {
  var svgElement = title.querySelector('svg');
  svgElement.style.transform = `rotate(${rotation})`;
}
