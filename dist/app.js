"use strict";
const names = [];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("It worked!");
    }, 2000);
});
promise.then((data) => {
    data.split(" ");
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Isaac", hobbies: ["Sports", "Cooking"] }, { age: 50 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = `Got ${element.length} element.`;
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!"));
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
extractAndConvert({ name: "Isaac" }, "name");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        return this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        return this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Isaac");
textStorage.addItem("Laughter");
textStorage.removeItem("Laughter");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function courseGoal(title, desc, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.desc = desc;
    courseGoal.complete = date;
    return courseGoal;
}
const nameArray = ["Isaac", "Laughter"];
//# sourceMappingURL=app.js.map