class Department {
  static fixedYear = 2020;
  // private readonly id: string;
  // private name: string;
  // private employees: string[] = [];
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;

    throw new Error("No report found");
  }

  set setMostRecentReport(value: string) {
    if (!value) throw new Error("Pass in a valid vlaue");
    this.addReports(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(employee: string) {
    if (employee === "Isaac") return;

    this.employees.push(employee);
  }

  addReports(text: string) {
    this.reports.push(text);

    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Isaac");

console.log(employee1, Department.fixedYear);

const it = new ITDepartment("52tw", ["Isaac"]);

it.addEmployee("Isaac");
it.addEmployee("Idan");

it.describe();
it.printEmployeeInfo();

console.log(it);

const accounting = new AccountingDepartment("acc", []);

accounting.setMostRecentReport = "End of the day Reports";

accounting.addEmployee("Laughter");
accounting.addEmployee("Isaac");

accounting.printEmployeeInfo();

accounting.addReports("Money deposited");
accounting.printReports();

console.log(accounting.mostRecentReport);

console.log(accounting);

// const accountingCopy = { name: "Dummy", describe: accounting.describe };

// accountingCopy.describe();
