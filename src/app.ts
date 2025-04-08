interface Admin {
  name: string;
  privilegdes: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: "Isaac",
  privilegdes: ["create-server", "delete-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
