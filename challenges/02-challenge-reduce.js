const numbers = [
  1, 5, 6, 9, 3, 4, 8, 5, 1, 10, 2, 3, 9, 8, 6, 9, 3, 4, 8, 10, 2, 3, 6, 8, 6,
  7, 1, 5, 4, 8, 6, 3, 2, 4, 7, 8, 9, 6, 3, 2, 1, 4, 5, 3, 2, 5, 6, 9, 8, 7,
];

console.log(numbers.length);

const rangesClassification = numbers.reduce(
  (accum, item) => {
    if (item <= 5) accum["1-5"] += 1;
    if (item >= 6 && item <= 8) accum["6-8"] += 1;
    if (item >= 9) accum["9-10"] += 1;
    return accum;
  },
  {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0,
  }
);

console.log(rangesClassification);
