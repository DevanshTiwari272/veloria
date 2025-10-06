import { watch } from "./productData.js";
import { shoes } from "./productData.js";
import { clothes } from "./productData.js";
import { mobile } from "./productData.js";
import { all } from "./productData.js";
import { rate } from "./util.js";
let n=localStorage.getItem('n')
 let choose;
n=Number(n)
let i=""

export function product(o){i="";
    all[n].forEach((value)=>{
   
    i+=`  <div class="product-container">
            <div class="product-img-div" data-img="${value.img}" data-name="${value.name}" data-rate="${rate(value.rate)}" data-id="${value.id}">
                <img class="product-img" src="${value.img}" alt="">
            </div>
            <div class="product-info-div">
                <p class="product-name">${value.name}</p>
            <p class="product-rate">${rate(value.rate)}</p>
        </div>
        </div>`
        
});document.querySelector(`.all-main`).innerHTML=`${i}`
;document.querySelectorAll(".product-img-div").forEach((value)=>{value.addEventListener("click",()=>{ choose={id:value.dataset.id,name:value.dataset.name,rate:value.dataset.rate,img:value.dataset.img};save();window.open("deep.html","myTab")})})}


product()
function save(){
localStorage.setItem('choose',JSON.stringify(choose))}

