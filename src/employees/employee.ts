import { Department } from "../salary/department";

export interface Employee {
    id:number;
    nombre:string;
    baseSalary: number;
    department: Department;
}