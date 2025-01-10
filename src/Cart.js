const Article = require("../src/Article");

function calculateTotalPrice(cart){
    if(!Array.isArray(cart)){
        throw new Error("There is no cart");
    }
    if(cart.some(element => !(element instanceof Article ))){
        throw new Error("Cart contains invalid items");
    }
    if(cart.some(element => element.price < 0)){
        throw new Error("Price of item must be positive");
    }
    if(cart.some(element => element.quantity <= 0)){
        throw new Error("Item quantity must be positive");
    }
    if(cart.some(element => element.stock <= 0)){
        throw new Error("The item is out of stock");
    }
    if(cart.some(element => element.stock < element.quantity)){
        throw new Error("There is not enough stock");
    }
    if(cart.length === 0){
        return 0;
    }
    return cart.map(element => element.price * element.quantity).reduce((total, current) => total += current);
}

module.exports = {calculateTotalPrice}