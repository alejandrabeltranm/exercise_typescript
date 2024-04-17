import { Department } from "../salary/department";

export interface Employee {
    id:number;
    name:string;
    baseSalary: number;
    department: Department;
}