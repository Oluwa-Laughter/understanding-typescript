"use strict";
const el = {
    name: "Isaac",
    privileges: ["create-server", "delete-server"],
    startDate: new Date(),
};
function add(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
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
//# sourceMappingURL=app.js.map