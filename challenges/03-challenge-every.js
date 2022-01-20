const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const underFifteen = team.every((item) => item.age <= 15);

if (underFifteen) {
  console.log("Todos en el equipo cumplen con la edad");
} else {
  console.log(
    "Hay personas que no cumplen la edad permitida para pertenecer al equipo"
  );
}
