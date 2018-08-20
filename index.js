var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (99) + 1);
  var groceryItem = {itemName: `${item}`, itemPrice: price};
  cart.push(groceryItem);
 return (`${item}` + " has been added to your cart.")
}

function viewCart() {
  var product = "";
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      product = product + cart[i].itemName + " at $" + cart.itemPrice;
      
      if(i < cart.length - 1) {
        product = product + ", "
      }
      
      if(i == cart.length - 2) {
        product = product + "and "
      }
    }
    return ("In your cart, you have " + product )
  }
  else {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  if (cart[item]) {
    //delete cart.item;
    return cart;
  }
  else {
    return "That item is not in your cart." 
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    cart = [];
    return ("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber)
  }
  else {
    return ("Sorry, we don't have a credit card on file for you.")
  }
}
