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
//# sourceMappingURL=app.js.map