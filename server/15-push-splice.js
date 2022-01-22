const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];

const newProducts = products.filter((item) => {
  if (item.id === "🥞") {
    myProducts.push(item);
  }
  return item.id !== "🥞";
});

console.log(products);
console.log(newProducts);
console.log(myProducts);

// Update

const productsV2 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
  id: "🥞",
  changes: {
    price: 200,
    description: "¡delicious!",
  },
};

const newProductsV2 = productsV2.map((item) => {
  if (item.id === "🥞") {
    return {
      ...item,
      ...update.changes,
    };
  }
  return { ...item };
});

console.log(productsV2);
console.log(newProductsV2);
