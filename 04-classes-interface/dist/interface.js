"use strict";
var add;
add = function (n1, n2) { return n1 + n2; };
var Person = (function () {
    function Person(n) {
        this.age = 44;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log("".concat(phrase, " ").concat(this.name));
        }
        else
            console.log("Hiii");
    };
    return Person;
}());
var user1;
user1 = new Person("Isaac");
user1.greet("Hi there I'm");
console.log(user1);
//# sourceMappingURL=interface.js.map