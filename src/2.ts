/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  // Заповніть модифікатори доступу
  public name: string;
  private department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getDepartment() {
    console.log(this.department);
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }

  // changeDepartment() {
  //   this.department = 'Department';
  // }

  // getDepartment() {
  //   console.log(this.department);
  // }

  // getEmployeeDetails() {
  //   return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  // }
}

const employee1 = new Employee('Jone', 'Development department', 1500);
// console.log(employee1);
// console.log(employee1.name);
// console.log(employee1.department);
// console.log(employee1.getDepartment());
// console.log(employee1.salary);

const manager1 = new Manager('Yurii', 'Development department', 2500);
// console.log(manager1);
// console.log(manager1.name);
// console.log(manager1.department);
// console.log(manager1.getDepartment());
// console.log(manager1.salary);

export {};
