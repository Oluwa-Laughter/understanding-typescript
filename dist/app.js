"use strict";
var _a;
const el = {
    name: "Isaac",
    privileges: ["create-server", "delete-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("1", 6);
result.split(" ");
const fetchedUserData = {
    id: "e1",
    name: "Isaac",
    job: { title: "CTO", descr: "Owner" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = " ";
const stored = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(stored);
function printEmployeeInfo(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Privileges: " + emp.startDate);
    }
}
printEmployeeInfo(el);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving...");
    }
    loadCargo(amount) {
        console.log(`Loading Cargo ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Moving at: " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 2000 });
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = " Hi there";
}
const error = {
    email: "Not Valid",
};
//# sourceMappingURL=app.js.map