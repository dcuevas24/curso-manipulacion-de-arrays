const letters = ["a", "b", "c"];

//Recorrer un Array con un for
for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  console.log("For", element);
}

//Recorrer Array con un forEach
letters.forEach((item) => console.log("forEach", item));
