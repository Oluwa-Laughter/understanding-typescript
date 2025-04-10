function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("Rendering Template...");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h2")!.textContent = p.name;
    }
  };
}

// @Logger("Logging Person")
@Logger("Logging ")
@WithTemplate("<h2>My Person Object</h2>", "app")
class Person {
  name = "Isaac";

  constructor() {
    console.log("Creating...");
  }
}

const newPErson = new Person();

console.log(newPErson);

function Log(target: any, propertyName: string | symbol) {
  console.log("Property decorator!");

  console.log(target, propertyName);
}

function log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function log4(target: any, name: string | symbol, position: number) {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else throw new Error("Invalid Price");
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @log3
  getPriceWithTax(@log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);
