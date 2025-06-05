const products = [
  { name: "Laptop", price: 455 },
  { name: "Handy", price: 4 },
  { name: "Tablet", price: 344 },
];

console.log(products[0]);
console.log(products[0].name);
console.log(products[1]);
console.log(products[2]);

products.forEach(function (product) {
  console.log(product.name + ": " + product.price);
});
