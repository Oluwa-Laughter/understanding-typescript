class Department {
  constructor(n: string) {
    this.name = n;
  }

  name: string;

  describe(this: Department) {
    console.log(` ${this.name}`);
  }
}

const accounting = new Department("Accounting");

accounting.describe();

const accountingCopy = { name: "Dummy", describe: accounting.describe };
accountingCopy.describe();
