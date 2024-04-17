import { Employee } from "../employees/employee";
import { Department } from "./department";


export function calculateSalary(employee: Employee): number {
    let percentage = 0;

    switch (employee.department) {
        case Department.IT:
            percentage = 0.1;
            break;
        case Department.RH:
            percentage = 0.8;
            break;
        case Department.SALES:
            percentage = 0.12;
            break;
        case Department.FINANCE:
            percentage = 0.09;
            break;
        default:
            console.log("Invalid department");
            break;
    }
    return employee.baseSalary + (employee.baseSalary * percentage);
}
