// const person: { name: string; age: number } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Isaac",
//   age: 50,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// person.role.push("admin");
// // person.role[1] = 10; // Error !!!
// // person.role = [0, "admin", "user"]; // Error !!!

// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];
// console.log(person.age);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()); // Error !!!
// }
// console.log(person.role);

/* enum */
// const ADMIN = 2;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 10,
  AUTHOR = 100,
}

const person = {
  name: "Isaac",
  age: 50,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10; // Error !!!
// person.role = [0, "admin", "user"]; // Error !!!

let favoriteActivities: string[];
favoriteActivities = ["Sports"];
console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // Error !!!
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
