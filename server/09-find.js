const numbers = [1, 30, 39, 29, 10, 13];

const findNumber = numbers.find((item) => item === 30);

console.log(findNumber);

//FindIndex
const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const findProduct = products.find((item) => item.id === "🥞");
console.log(findProduct);

const findIndexProduct = products.findIndex((item) => item.id === "🍔");

console.log(findIndexProduct);
