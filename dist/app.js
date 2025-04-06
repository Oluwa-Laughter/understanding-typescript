"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(` ${this.name}`);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
const accountingCopy = { name: "Dummy", describe: accounting.describe };
accountingCopy.describe();
//# sourceMappingURL=app.js.map