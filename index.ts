import { Employee } from "./src/employees/employee";
import { Department } from "./src/salary/department";
import { calculateSalary } from "./src/salary/calculator";


const employee: Employee = {
    baseSalary: 50000,
    department: Department.IT,
};


const totalSalary = calculateSalary(employee);
console.log(`Total salary for the employee in the ${employee.department} department is: ${totalSalary}`);
