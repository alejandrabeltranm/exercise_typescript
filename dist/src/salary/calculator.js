"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSalary = void 0;
const department_1 = require("./department");
function calculateSalary(employee) {
    let percentage = 0;
    switch (employee.department) {
        case department_1.Department.IT:
            percentage = 0.1;
            break;
        case department_1.Department.RH:
            percentage = 0.8;
            break;
        case department_1.Department.SALES:
            percentage = 0.12;
            break;
        case department_1.Department.FINANCE:
            percentage = 0.09;
            break;
        default:
            console.log("Invalid department");
            break;
    }
    return employee.baseSalary + (employee.baseSalary * percentage);
}
exports.calculateSalary = calculateSalary;
