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
  disableScroll();
});

closeMenu.addEventListener("click", function () {
  responsiveMenu.style.right = "110%";
  responsiveMenu.style.left = "auto";

  if (activeDropdown) {
    activeDropdown.style.height = "0";
    activeDropdown = null;
  }
  enableScroll();
});

dropdownMenus.forEach(function (dropdownMenu) {
  dropdownMenu.addEventListener("click", function () {
    var parentLi = this.closest(".drawer-item-container");
    var childLi = parentLi.querySelector("dropdown-mega-menu");

    // Check if a different dropdown is already active
    if (activeDropdown && activeDropdown !== childLi) {
      var activeDropdownMenu = activeDropdown.previousElementSibling;
      activeDropdownMenu.style.transform = "scaleY(1)";
      activeDropdown.style.height = "0";
    }

    // Toggle the clicked dropdown
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

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
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

// Prueba productos recomendados

const handleIntersection = (entries, observer) => {
  if (!entries[0].isIntersecting) return;

  observer.unobserve(productRecommendationsSection);

  const url = productRecommendationsSection.dataset.url;

  fetch(url)
    .then(response => response.text())
    .then(text => {
      const html = document.createElement('div');
      html.innerHTML = text;
      const recommendations = html.querySelector('.product-recommendations');

      if (recommendations && recommendations.innerHTML.trim().length) {
        productRecommendationsSection.innerHTML = recommendations.innerHTML;
      }
    })
    .catch(e => {
      console.error(e);
    });
};

const productRecommendationsSection = document.querySelector('.product-recommendations');
const observer = new IntersectionObserver(handleIntersection, {rootMargin: '0px 0px 200px 0px'});

observer.observe(productRecommendationsSection);


/* COLLECTION PAGE VERTICAL OR HORIZONTAL GRID AND PRODUCT CARD */

// TRUNCATE WORDS

document.addEventListener('DOMContentLoaded', function() {
    
    var contentElements = document.querySelectorAll('.truncate-32');

      for (var i = 0; i < contentElements.length; i++) {
      var content = contentElements[i].textContent;
      var words = content.split(' ');

      if (words.length > 32) {
        var truncatedContent = words.slice(0, 32).join(' ') + '...';
        contentElements[i].textContent = truncatedContent;
      }
    }
  });


// PRODUCT PAGE QUANTITY SELLECT

document.addEventListener('DOMContentLoaded', function() {
    // Get all the cart items on the page
    var cartItems = document.querySelectorAll('cart-item, cart-item-responsive');

    // Loop over each cart item
    cartItems.forEach(function(cartItem) {
        // Get the quantity field inside this cart item
        var quantityField = cartItem.querySelector('.quantity-field');
        
        // Hide the default HTML number input field spinners
        quantityField.style.webkitAppearance = 'none';
        quantityField.style.mozAppearance = 'textfield';

        // Get the associated buttons
        var minusButton = quantityField.previousElementSibling;
        var plusButton = quantityField.nextElementSibling;

        // Set up event listeners for the buttons
        minusButton.addEventListener('mousedown', changeQuantity);
        minusButton.addEventListener('mouseup', resetColor);
        plusButton.addEventListener('mousedown', changeQuantity);
        plusButton.addEventListener('mouseup', resetColor);
    });

    function changeQuantity(event) {
        // Make the button darker when clicked
        event.target.style.backgroundColor = '#888';

        // Get the associated quantity field
        var quantityField = event.target.classList.contains('button-minus') ?
            event.target.nextElementSibling : event.target.previousElementSibling;

        // Get the current quantity
        var currentQuantity = parseInt(quantityField.value, 10);

        // If it's not a number, default the quantity to 0
        if (isNaN(currentQuantity)) {
            currentQuantity = 0;
        }

        // Increment or decrement the quantity
        if (event.target.classList.contains('button-plus')) {
            quantityField.value = currentQuantity + 1;
        } else if (event.target.classList.contains('button-minus') && currentQuantity > 0) {
            quantityField.value = currentQuantity - 1;
        }
    }

    function resetColor(event) {
        // Restore the button color after click
        event.target.style.backgroundColor = '';
    }
});
