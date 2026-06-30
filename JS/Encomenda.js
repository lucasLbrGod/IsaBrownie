const buttons = document.querySelectorAll(".add-cart");
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const countElement = document.getElementById("cart-count");

let cart = [];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        const itemExistente = cart.find(item => item.name === name);

        if (itemExistente) {
            itemExistente.quantidade += 1;
        } else {
            cart.push({
                name,
                price,
                quantidade: 1
            });
        }

        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = "";
    
    let total = 0;
    let quantidadeItens = 0;

    cart.forEach(item => {
        const totalDoItem = item.price * item.quantidade;
        
        total += totalDoItem;
        quantidadeItens += item.quantidade;

        cartItems.innerHTML += `
        <div class="cart-item">
            <span>${item.name} (x${item.quantidade})</span>
            <span>R$ ${totalDoItem}</span>
        </div>
        `;
    });

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Carrinho vazio</p>";
        quantidadeItens = 0;
    }

    totalElement.innerText = total;
    countElement.innerText = `(${quantidadeItens})`;
}

function mostrarToast(mensagem) {
    let toast = document.getElementById("toast-notificacao");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast-notificacao";
        document.body.appendChild(toast);
    }
    
    toast.innerHTML = mensagem;
    
    toast.classList.add("mostrar");
    
    setTimeout(() => {
        toast.classList.remove("mostrar");
    }, 3000);
}

document.getElementById("finish").addEventListener("click", () => {
    if (cart.length === 0) {
        mostrarToast("⚠️ Seu carrinho está vazio!");
        return;
    }

    mostrarToast("✨ Pedido enviado com sucesso!");
    
    cart = [];
    updateCart();
});

