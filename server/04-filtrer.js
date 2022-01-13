const words = ["spray", "limit", "elite", "exuberant"];

const rta = words.filter((item) => item.length >= 6);

console.log(rta);

//-----------------------------------------------------------------------
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

const deliver = orders.filter((item) => item.delivered);

console.log(deliver);
