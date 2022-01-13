const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

/*const mutableForm = orders.map((item) => {
  item.tax = 0.19;
  return item;
});

console.log(orders);
console.log(mutableForm);*/

const immutableForm = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});

console.log(orders);
console.log(immutableForm);
