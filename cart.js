import { save } from "./util.js"
let cart=JSON.parse(localStorage.getItem("cart"))
let i=""
let price=0;
let gst=0;
let total=0;
cart.forEach((value)=>{i+=`<div class="cart-product cart-id-${value.id}">
    <div class="product-img-div">
        <img class="product-img" src="${value.img}" alt="">
    </div>
    <div class="product-info">
        <p class="product-name">${value.name}</p>
        <div class="price-div">
            <p class="product-quantity product-name">Quantity:${value.quantity}</p>
            
        <p class="product-price">${value.rate}</p>
        
        </div>
    </div>
    <button class="product-remove remove-icon" data-id="${value.id}"><img src="icon/trash.svg" class="trash"></button>
</div>`})
document.querySelector('.cart-product-main').innerHTML=`${i}`
document.querySelectorAll(".product-remove").forEach((value)=>{value.addEventListener("click",()=>{
    cart.forEach((cartProduct,index)=>{if(cartProduct.id===value.dataset.id){cart.splice(index,1)}});
    document.querySelector(`.cart-id-${value.dataset.id}`).remove();
 
    save(cart)
      pricecal();
    final()
     console.log(localStorage.getItem('cart'))
})})
pricecal()

function final(){document.querySelector(".final-price").innerHTML=`  <div class="price-breakdown">
        <div class="price-row">
            <span class="price-label">Base Price:</span>
            <span class="price-value" id="basePrice">$${price}</span>
        </div>
        <div class="price-row">
            <span class="price-label">GST (18%):</span>
            <span class="price-value" id="gstAmount">$${gst}</span>
        </div>
        <div class="price-row">
            <span class="price-label">Shipping:</span>
            <span class="price-value" id="shippingFee">$5.00</span>
        </div>
        <div class="price-divider"></div>
        <div class="price-row total">
            <span class="price-label">Total Amount:</span>
            <span class="price-value" id="totalAmount">$${total}</span>
        </div>
        <button class="purchase">confirm</button>
    </div>`
                }
final()
function pricecal(){ price=0;
 gst=0;
 total=0 ;cart.forEach((value)=>{price+=(Number(value.rate)*Number(value.quantity))}),gst=Number(( price*18/100).toFixed(2)),total=price+gst+5}


