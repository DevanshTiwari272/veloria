 let n=localStorage.getItem('n')||0
function save (){localStorage.setItem("n",n)}
let i=0
let banner=['product/mobile/modern-smartphone-with-live-abstract-wallpaper-coming-out-screen_23-2151033614.webp',`product/watch/wp4512772.jpg`,'welcomepage/banner/real.png']
document.querySelectorAll(".span-shoes").forEach((vlaue)=>{vlaue.addEventListener("click",()=>{n="1";save();window.open("product.html" ," myTab")})})
document.querySelectorAll(".span-clothes").forEach((vlaue)=>{vlaue.addEventListener("click",()=>{n="0";save();window.open("product.html" , "myTab")})})
document.querySelectorAll(".span-watch").forEach((vlaue)=>{vlaue.addEventListener("click",()=>{n="3";save();window.open("product.html" ," myTab")})})
document.querySelectorAll(".span-mobile").forEach((vlaue)=>{vlaue.addEventListener("click",()=>{n="2";save();window.open("product.html ", "myTab")})})
document.querySelector(".span-home").addEventListener("click",()=>{window.open("index.html "," myTab")})//remember to change it to index when publishing in github
document.querySelector(".span-cart").addEventListener("click",()=>{window.open("cart.html" ," myTab")})

document.querySelector(".span-contact").addEventListener("click",()=>{window.open("contact.html "," myTab")})
/*setInterval(()=>{if(i===3){i=0};document.querySelector('.product-banner').innerHTML=` <img class="product-banner-img" src="${banner[i]}" alt="">
    <div class="product-banner-text-div">
        <p class="product-banner-text">All your Favorite</p> <p class="product-banner-text">product at great</p> 
        <p class="product-banner-text">price</p></div>`;i++},5000)*/
