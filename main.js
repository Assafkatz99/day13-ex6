const store = {
    name: "Assaf's Store",
    location: "Binyamina",
    categories: ["electronics", "furniture"],
    products: [
      { name: "laptop", price: 1000, quantity: 5 },
      { name: "chair", price: 100, quantity: 10 },
      { name: "table", price: 200, quantity: 3 },
      { name: "laptop", price: 1500, quantity: 2 }
    ]
  };
  

function ttlPriceForProduct(store, productName) {
    let totalPrice = 0;
    for (const product of store.products) {
      if (product.name === productName) {
        totalPrice += product.price * product.quantity;
      }
    }
    return totalPrice;
  }
  
console.log(ttlPriceForProduct(store, "laptop"));