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
