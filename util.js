export function rate(price){
  return  price.toFixed(2)

}
let cart=JSON.parse(localStorage.getItem("cart"))||[]
export function save(cart=cart) { localStorage.setItem('cart',JSON.stringify(cart))}