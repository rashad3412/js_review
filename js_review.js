// const x = 20;
// const y = 20;

// console.log(x >= y);

// const firstName = "Rashad ";
// const job = "Web developer ";
// const birthYear = "1993 ";
// const year = 2037;

// const me = "I'm " + firstName + job + (birthYear - year);
// console.log(me);

// // const favortie = prompt("What is your favorite food? ");
// // console.log(favortie);

// function typeOfFood(meat, starch) {
//   const food = `${meat} and ${starch}`;
//   return food;
// }

// console.log(typeOfFood("Chicken", "Potatoes"));

// const age = (birthYear) => 2050 - birthYear;
// const ageYear = age(1993);
// console.log(ageYear);

const rashad = {
  firstName: "rashad",
  lastName: "edwards",
  birthYear: 1993,
  age: 30,
  job: "software enginner",
  friends: "the homies",

  calcAge: function () {
    return this.birthYear;
  },
};
console.log(rashad.calcAge());
// console.log(rashad);

// const interestedin = prompt(
//   " What would you like to know about rashad? firstName, lastName, age, job, friends"
// );
// console.log(rashad[interestedin]);

// if (rashad[interestedin]) {
//   console.log(rashad[interestedin]);
// } else {
//   console.log("Wrong request");
// }

for (let rep = 1; rep <= 3; rep++) {
  const people = ["rashad", "jane", "jimmy"];
  console.log(`${rep} ${people}`);
}
