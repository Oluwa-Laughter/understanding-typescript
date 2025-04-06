class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(` ${this.id} : ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'u72'
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");

    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("52tw", ["Isaac"]);

it.addEmployee("Isaac");
it.addEmployee("Idan");

it.describe();
it.printEmployeeInfo();

console.log(it);

const accounting = new AccountingDepartment("acc", []);

accounting.addReports("Money deposited");
accounting.printReports();

console.log(accounting);

// const accountingCopy = { name: "Dummy", describe: accounting.describe };

// accountingCopy.describe();
