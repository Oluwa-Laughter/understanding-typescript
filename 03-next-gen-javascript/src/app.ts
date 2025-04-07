// const userName = "Isaac";
// let age = 50;

// age = 25;

// function add(a: number, b: number) {
//   var result;
//   result = a + b;

//   return result;
// }

// console.log(result);

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

const add2 = (a: number, b: number = 2) => a + b;

const printOutput: (a: string | number) => void = (output) =>
  console.log(output);

const btn = document.querySelector("button");

if (btn) {
  btn.addEventListener("click", (event) => console.log(event));
}

printOutput(add2(4));

const hobbies = ["Sport", "cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Isaac",
  age: 40,
};

const copiedPerson = { ...person };

const add3 = (...numbers: number[]) => {
  return numbers.reduce((acc, cur) => acc + cur, 0);
};

const addedNumbers = add3(6, 6, 3, 6, 8);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;
console.log(userName, age);
