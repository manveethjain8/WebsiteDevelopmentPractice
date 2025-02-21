export let cart = JSON.parse(localStorage.getItem('Cart')) || [];

export function cartItemsCalculator(cart){
    let totalItems = 0;
    cart.forEach((item) => {
        console.log(totalItems);
        totalItems += item.itemQuantity;
    });
    console.log(totalItems);
    
    if(totalItems > 0){
        return totalItems;
    }else{
        return 0;
    }
    
}

