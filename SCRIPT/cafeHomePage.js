import { fetchMenu, returnItemFunction } from "./DATA/menuItems.js";
import { cart, cartItemsCalculator } from "./DATA/cartItems.js";

let menu=[];
updateCartCount();

const loadMenu = async () => {
    try {
        menu = await fetchMenu();
        updateCartCount(); // ✅ Store fetched menu globally
        displayMenu(); // ✅ Call displayMenu() only after menu is loaded
    } catch (error) {
        console.error("Error fetching menu:", error);
    }
};
loadMenu();

let itemDisplayHTML='';


function displayMenu(){
    menu.forEach((item) => {
        itemDisplayHTML+=`<div class="recipeCard">
                            <div class="recipeImage">
                                <img class="recipePicture" src=${item.itemImage} alt="Recipe Image">
                            </div>
                            <div class="recipeInfo">
                                <h2 class="recipeTitle">${item.itemName}</h2>
                                <p class="moreOnRecipe">${item.itemDescription}</p>
                                <div class="buttons">
                                    <button class="viewJourney">View Journey</button>
                                    <button class="addToCart" data-item-id="${item.itemId}" id="openPopup">Details</button>
                                </div>
                            </div>
                        </div>
                        `;
    });
    
    document.querySelector('.recipesDisplay').innerHTML=itemDisplayHTML;
    
    
    document.querySelectorAll('.addToCart').forEach((button) => {
        button.addEventListener('click', () => {
            let itemId = button.dataset.itemId;
            let selectedItem=returnItemFunction(itemId);
            popupFunction(selectedItem);
    
        });
    });
    
        function popupFunction(selectedItem) {
    
            let popupHtml=`
                        <div class="itemImageBox">
                            <img class="popupImage" src=${selectedItem.itemImage} alt="Popup Image">
                        </div>
                        <div class="popupItemInfo">
                            <div class="popupItemName">${selectedItem.itemName}</div>
                            <div class="popupItemFacts">${selectedItem.itemMoreInfo}</div>
                            <div class="popupItemPrice">Rs.${selectedItem.itemPrice}</div>
                            <div class="popupItemQuantity">
                                <label>Quantity:</label>
                                <select class="popupItemQuantitySelector">
                                    <option selected value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    </select>
                            </div>
                            <div class="popupButtons">
                                <button class="popupClose">CLOSE</button>
                                <button class="popupAddToCart">ADD</button>
                            </div>`;
    
                        document.querySelector(".popupWindow").innerHTML = popupHtml;
                        
                        document.querySelector(".overlay").style.display = "flex";
    
                        document.querySelector(".popupWindow").style.display = "flex";
                    
                        document.querySelector(".popupClose").addEventListener("click", function () {
                            document.querySelector(".popupWindow").style.display = "none";
                            document.querySelector(".overlay").style.display = "none";
                        });
    
    
        document.querySelector(".popupAddToCart").addEventListener("click", ()=>{
            let selectedQuantity = document.querySelector(".popupItemQuantitySelector").value;
            let quantity = parseInt(selectedQuantity);
            let itemInCart = cart.find(item => item.itemId === selectedItem.itemId);
            if(itemInCart){
                itemInCart.itemQuantity+=quantity;
            } else {
                cart.push({itemId: selectedItem.itemId, itemName: selectedItem.itemName, itemPrice: selectedItem.itemPrice, itemQuantity: quantity, itemImage: selectedItem.itemImage  });
            }
    
            localStorage.setItem('Cart', JSON.stringify(cart));
            updateCartCount();
        });
    }
    
    document.querySelector(".cartButton").addEventListener("click", () => {
        window.location.href = "cafeCartPage.html";
    });
}


function updateCartCount() {
    document.querySelector(".cartCount").innerHTML = cartItemsCalculator(cart);
}


