import { save } from "./util.js";
let choose =JSON.parse(localStorage.getItem("choose"))
let cart=JSON.parse(localStorage.getItem("cart"))||[]
let conform;
let number=1;
document.querySelector(".product-container").innerHTML=`
            <div class="product-image">
                <img src="${choose.img}" alt="Laptop Product Image">
            </div>
            <div class="product-details">
                <h1 class="product-title">${choose.name}</h1>
                <div class="product-price">${choose.rate}</div>
                <p class="product-description">
                    imagine their is a discreaption full of the detail of the project and details about now i am writting this because i need to fill this so you can ignore it and keep moving just move and move already i am really sleepy man i want to finsh this and sleep really really sleep imagine their is a discreaption full of the detail of the project and details about now i am writting this because i need to fill this so you can ignore it and keep moving just move and move already i am really sleepy man i want to finsh this and sleep really really sleep
                </p>
                
                <div class="quantity-selector">
                    <span class="quantity-label">Select Quantity:</span>
                    <div class="quantity-buttons">
                        <div class="quantity-btn active" data-value="1">1</div>
                        <div class="quantity-btn" data-value="2">2</div>
                        <div class="quantity-btn" data-value="3">3</div>
                        <div class="quantity-btn" data-value="4">4</div>
                        <div class="quantity-btn" data-value="5">5</div>
                    </div>
                </div>
                
                <button class="add-to-cart">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                
               
            </div>
        </div>
    

    <div class="notification" id="notification">
        <i class="fas fa-check-circle"></i>
        <span>Product added to cart successfully!</span>
    </div>`
     document.querySelector(".add-to-cart").addEventListener('click',()=>{cart.forEach((value)=>{if(value.id===choose.id){conform="yes";value.quantity+=number}});if(!conform){choose["quantity"]=number;cart.push(choose)}
            
        ;save(cart)})
document.addEventListener('DOMContentLoaded', function() {
            const quantityButtons = document.querySelectorAll('.quantity-btn');
            const addToCartButton = document.querySelector('.add-to-cart');
            const notification = document.getElementById('notification');
            
            let selectedQuantity = 1;
            
            // Quantity selection
            quantityButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    quantityButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Update selected quantity
                    selectedQuantity = parseInt(this.getAttribute('data-value'));
                });
            });
            
            // Add to cart functionality
            addToCartButton.addEventListener('click', function() {
                // Show notification
                notification.classList.add('show');
                
                // Hide notification after 3 seconds
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 3000);
                
                // In a real application, you would add the product to cart here
                console.log(`Added ${selectedQuantity} item(s) to cart`);
            });
           quantityButtons.forEach((value,index)=>{value.addEventListener('click',()=>{number=index+1})})});
   