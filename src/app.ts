interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  age = 44;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person("Isaac");
// user1.name = 'Laughter'

user1.greet("Hi there I'm");
console.log(user1);
