const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//filter()
const inStockProducts = cart.filter(item => item.inStock);
console.log(inStockProducts);

//map()
const productTotals = inStockProducts.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log(productTotals);

//reduce()
const grandTotal = productTotals.reduce(
  (sum, item) => sum + item.totalPrice,
  0
);
console.log(grandTotal);

//find()
const mouseDetails = cart.find(item => item.name === "Mouse");
console.log(mouseDetails);

//findIndex()
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log(keyboardIndex);
