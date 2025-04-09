const names: Array<string> = [];
// names[0].split(" ");

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("It worked!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj = merge(
  { name: "Isaac", hobbies: ["Sports", "Cooking"] },
  { age: 50 }
);
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = `Got ${element.length} element.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

extractAndConvert({ name: "Isaac" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    return this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;

    return this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Isaac");
textStorage.addItem("Laughter");

textStorage.removeItem("Laughter");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();

// const isaacObj = { name: "Isaac" };

// objStorage.addItem(isaacObj);
// objStorage.addItem({ name: "Manu" });

// objStorage.removeItem(isaacObj);

// console.log(objStorage.getItems());

interface Goals {
  title: string;
  desc: string;
  complete: Date;
}

function courseGoal(title: string, desc: string, date: Date): Goals {
  let courseGoal: Partial<Goals> = {};

  courseGoal.title = title;
  courseGoal.desc = desc;
  courseGoal.complete = date;

  return courseGoal as Goals;
}

const nameArray: Readonly<string[]> = ["Isaac", "Laughter"];
// nameArray.push('Niii')
// nameArray.pop();
