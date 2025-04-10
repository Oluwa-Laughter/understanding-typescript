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

class Product {
  @Log
  title: string;
  private _price: number;

  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else throw new Error("Invalid Price");
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
