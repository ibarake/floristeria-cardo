const sizings = function() {
    // product cards

    var titles = document.querySelectorAll('inline-half-container .card-product-title');

    if (titles.length > 0) {
        // Find the tallest element
        var maxHeight3 = 0;
        titles.forEach(title => {
            if (title.offsetHeight > maxHeight3) {
                maxHeight3 = title.offsetHeight;
            }
        });

        // Set the min-height of all elements to the maxHeight
        titles.forEach(title => {
            title.style.minHeight = `${maxHeight3}px`;
        });
    } else {
      console.log('error')
    }
    
    var titles5 = document.querySelectorAll('container-4products .card-product-title');

    if (titles5.length > 0) {
        // Find the tallest element
        var maxHeight3 = 0;
        titles5.forEach(title => {
            if (title.offsetHeight > maxHeight3) {
                maxHeight3 = title.offsetHeight;
            }
        });

        // Set the min-height of all elements to the maxHeight
        titles5.forEach(title => {
            title.style.minHeight = `${maxHeight3}px`;
        });
    } else {
      console.log('error')
    }

    var titles1 = document.querySelectorAll('main-ba-container .card-product-title');

    if (titles1.length > 0) {
        // Find the tallest element
        var maxHeight1 = 0;
        titles1.forEach(title => {
            if (title.offsetHeight > maxHeight1) {
                maxHeight1 = title.offsetHeight;
            }
        });

        // Set the min-height of all elements to the maxHeight
        titles1.forEach(title => {
            title.style.minHeight = `${maxHeight1}px`;
        });
    } else {
      console.log('error')
    }

    var titles2 = document.querySelectorAll('.fbt-product-title');

    if (titles2.length > 0) {
        // Find the tallest element
        var maxHeight2 = 0;
        titles2.forEach(title => {
            if (title.offsetHeight > maxHeight2) {
                maxHeight2 = title.offsetHeight;
            }
        });

        // Set the min-height of all elements to the maxHeight
        titles2.forEach(title => {
            title.style.minHeight = `${maxHeight2}px`;
        });
    } else {
      console.log('error')
    }

    // Select the container
    var container = document.querySelector('inline-half-container');

    if (container) {
        // Compute the total height of all its children
        var totalHeight = 0;
        for (let child of container.children) {
            totalHeight += child.offsetHeight;
        }

        // Set the container's height to that computed value
        container.style.height = `${totalHeight}px`;
    } else {
      console.log('error')
    }
}


window.onload = function() {
  sizings();
}
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
        
        // Si hay otro menú desplegable abierto, ciérralo
        if (activeDropdown && activeDropdown !== childLi) {
            var activeDropdownMenu = activeDropdown.closest('.drawer-item-container').querySelector('.dropdown-open');
            activeDropdownMenu.style.transform = "scaleY(1)";
            activeDropdown.style.height = "0";
        }

        // Alternar el menú desplegable en el que se hizo clic
        if (childLi.style.height === "0px" || !childLi.style.height) {
            dropdownMenu.style.transform = "scaleY(-1)";  // Gira la flecha
            childLi.style.height = childLi.scrollHeight + "px";  // Abre el menú desplegable
            activeDropdown = childLi;
        } else {
            dropdownMenu.style.transform = "scaleY(1)";  // Restablece la flecha
            childLi.style.height = "0";  // Cierra el menú desplegable
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
  if (heroTitle){
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


// CART PAGE QUANTITY SELLECT
async function updateCartDrawer() {
  const res = await fetch("/?section_id=main-cart");
  const text = await res.text();
  const html = document.createElement("section");
  html.innerHTML = text;

  const newBox = html.querySelector(".cart").innerHTML;

  document.querySelector(".cart").innerHTML = newBox;

  addCartDrawerListeners();
}
function addCartDrawerListeners() {

  const noteButtons = document.querySelectorAll('.cart-note');

            noteButtons.forEach(function(button) {
              button.addEventListener('click', function(e) {

                const popup = this.nextElementSibling;

                if (popup.classList.contains('open')) {
                  // If the popup is currently open, close it
                  popup.style.height = '0px';
                  popup.classList.remove('open');
                } else {
                  // If the popup is currently closed, open it
                  popup.style.height = 'auto';
                  popup.classList.add('open');
                }

              });
            });

        document.addEventListener('DOMContentLoaded', function() {
        var textareas = document.querySelectorAll('.popup-content textarea');
        var hiddenTextarea = document.querySelector('textarea[name="note"]');

        textareas.forEach(function(textarea) {
          textarea.addEventListener('keyup', function() {
            var notes = [];
            textareas.forEach((ta) => {
              var productTitle = ta.closest('cart-item, cart-item-responsive').querySelector('.pc-title').innerText;
              var noted = ta.value;

              if (noted) {
                notes.push(productTitle + ': ' + noted);
              }
            });

            hiddenTextarea.value = notes.join('. ');
            try{
            jQuery.post(window.Shopify.routes.root + 'cart/update.js', { note: hiddenTextarea.value });
            console.log('post')
            } catch {
              console.log('no post')
            }
          });
        });
      });

  const qBtns = document.querySelectorAll('.qButton');
  
  qBtns.forEach((qBtn) => {
    qBtn.addEventListener('click', async () =>{ 
      const rootItem = qBtn.parentElement.parentElement.parentElement;
      console.log(rootItem);
      const key = rootItem.getAttribute('data-item-key');
      const currentQuantity = Number(qBtn.parentElement.querySelector('.quantity-field').value);
      const isUp = qBtn.classList.contains(
        "button-plus"
      );
      const newQuantity = isUp ? currentQuantity + 1 : currentQuantity - 1;
  
      
      const res = await fetch('/cart/update.js', {
        method:'post',
        headers: {
          Accept: 'application/json',
          "Content-Type": "application/json"
        },
        body: JSON.stringify({updates: {[key]: newQuantity}})
      })
      const json = await res.json();
  
      updateCartDrawer();
    })
  })
  
}

addCartDrawerListeners();



//PRODUCT PAGE QUANTITY

const pqBtn = document.querySelectorAll('.pq-button');

pqBtn.forEach((button) => {
    button.addEventListener('click', () => {
      
      const quantity = button.parentElement.querySelector('.quantity-field');

      const currentQuantity = Number(quantity.value);
      const isUp = button.classList.contains(
        "button-plus"
      );
      if (isUp) {
            const newQuantity = currentQuantity + 1;
            quantity.value = newQuantity;
        } else if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            quantity.value = newQuantity;
        }
    })
});


document.addEventListener('DOMContentLoaded', function () {
  const openPopupButton = document.getElementById('openPopup');
  const closePopupButton = document.getElementById('closePopup');
  const popupOverlay = document.getElementById('popupOverlay');
  const popupForm = document.getElementById('popupForm');

  // Mostrar el popup
  openPopupButton.addEventListener('click', function (e) {
    e.preventDefault();
    popupOverlay.style.display = 'flex';
  });

  // Ocultar el popup
  closePopupButton.addEventListener('click', function () {
    popupOverlay.style.display = 'none';
  });

  // Cerrar el popup al hacer clic fuera del contenido
  popupOverlay.addEventListener('click', function (event) {
    if (event.target === popupOverlay) {
      popupOverlay.style.display = 'none';
    }
  });

  /*Manejo del envío del formulario
  popupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    console.log('Datos enviados:', { name, email, phone });
    window.location.href = 'tel:3112085671';
    popupOverlay.style.display = 'none';
  });*/
});





