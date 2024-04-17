"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const department_1 = require("./src/salary/department");
const calculator_1 = require("./src/salary/calculator");
const employee = {
    id: 13,
    nombre: 'Ale',
    baseSalary: 50000,
    department: department_1.Department.IT,
};
const totalSalary = (0, calculator_1.calculateSalary)(employee);
console.log(`Total salary for the employee in the ${employee.department} department is: ${totalSalary}`);
