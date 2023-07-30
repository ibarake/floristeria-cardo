// PRODUCT PAGE QUANTITY SELLECT
console.log("hello")
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

  const qBtns = document.querySelectorAll('.qButton');
  
  qBtns.forEach((qBtn) => {
    console.log(qBtn)
    qBtn.addEventListener('click', async () =>{ 
      console.log(qBtn)
      const rootItem = qBtn.parentElement.parentElement;
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