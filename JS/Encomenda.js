const buttons = document.querySelectorAll(".add-cart");

const cartItems = document.getElementById("cart-items");

const totalElement = document.getElementById("total");

const countElement = document.getElementById("cart-count");

let cart = [];

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const name = button.dataset.name;

const price = Number(button.dataset.price);

cart.push({
name,
price
});

updateCart();

});

});

function updateCart(){

cartItems.innerHTML="";

let total=0;

cart.forEach(item=>{

total += item.price;

cartItems.innerHTML += `

<div class="cart-item">

<span>${item.name}</span>

<span>R$ ${item.price}</span>

</div>

`;

});

if(cart.length===0){

cartItems.innerHTML="<p>Carrinho vazio</p>";

}

totalElement.innerText=total;

countElement.innerText=`(${cart.length})`;

}

document
.getElementById("finish")
.addEventListener("click",()=>{

if(cart.length===0){

alert("Seu carrinho está vazio");

return;

}

alert("Pedido enviado com sucesso!");

cart=[];

updateCart();

});