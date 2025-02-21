import { cart } from "./DATA/cartItems.js";

console.log(cart);



displayCartItems();

function displayCartItems(){
    let cartDisplayHTML='';
    cart.forEach((item) => {
        cartDisplayHTML+=`<div class="cartItemCard">
                    <div class="cartItemImageBox">
                        <img class="cartItemImage" src="${item.itemImage}"alt="Item Image">
                    </div>
                    <div class="cartItemInfoBox">
                        <h3 class="cartItemName">${item.itemName}</h3>
                        <p class="cartItemPrice">Rs.${item.itemPrice}</p>
                        <div class="cartItemQuantityBox">
                            <p class="cartItemQuantityText">Quantity:</p>
                            <button class="cartItemDecreaseButton" data-item-id="${item.itemId}">-</button>
                            <p class="cartItemQuantityNumber">${item.itemQuantity}</p>
                            <button class="cartItemIncreaseButton" data-item-id="${item.itemId}">+</button>
                        </div>
                        <button class="cartItemRemoveButton" data-item-id="${item.itemId}">Remove</button>
                    </div>
                </div>`;
    });
    
    document.querySelector(".cartItemsDisplay").innerHTML = cartDisplayHTML;
    
    document.querySelectorAll(".cartItemIncreaseButton").forEach((button) => {
        button.addEventListener("click", () => {
            let cartItemID = button.dataset.itemId;
            let cartItem = cart.find((item) => item.itemId === cartItemID);
            cartItem.itemQuantity++;
            saveToCart();
            displayCartItems();
        });
    });
    
    document.querySelectorAll(".cartItemDecreaseButton").forEach((button) => {
        button.addEventListener("click", () => {
            let cartItemID = button.dataset.itemId;
            let cartItem = cart.find((item) => item.itemId === cartItemID);
            if (cartItem.itemQuantity > 1) {
                cartItem.itemQuantity--;
            }else{
                cart.splice(cartItem, 1);
            }
            saveToCart();
            displayCartItems();
        });

    });
    
    document.querySelectorAll(".cartItemRemoveButton").forEach((button) => {
        button.addEventListener("click", () => {
            let cartItemID = button.dataset.itemId;
            let cartItem = cart.find((item) => item.itemId === cartItemID);
            cart.splice(cartItem, 1);
            saveToCart();
            displayCartItems();
        });
    });
}

function saveToCart(){
    localStorage.setItem('Cart', JSON.stringify(cart));
}