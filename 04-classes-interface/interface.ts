// type AddFunction = (a:number, b:number) => number

interface AddFunction {
  (a: number, b: number): number;
}

let add: AddFunction;

add = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;

  age = 44;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else console.log("Hiii");
  }
}

let user1: Greetable;

user1 = new Person("Isaac");
// user1.name = 'Laughter'

user1.greet("Hi there I'm");
console.log(user1);
