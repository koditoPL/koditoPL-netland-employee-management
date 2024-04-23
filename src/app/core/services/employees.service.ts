import { Injectable } from '@angular/core'
import { EmployeeNetland, Position } from '../models/employee.interface'
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private employeesUrl: string = 'assets/employees.json';
  private employees: EmployeeNetland[] = [
    {
      name: "Piotr Nowak",
      age: 25,
      isFullTime: false,
      position: Position.Junior
    },
    {
      name: "Jan Kowalski",
      age: 19,
      isFullTime: true,
      position: Position.Mid
    },
    {
      name: "Piotr Nowak",
      age: 38,
      isFullTime: false,
      position: Position.Senior
    }
  ]
  ;

  constructor(private http: HttpClient) {}

  getEmployees(): EmployeeNetland[] {
    return this.employees;
  }

  getOneEmployees(id: number): EmployeeNetland {
    return this.employees[id];
  }

  removeEmployee(employee_id: number): void {
    this.employees.splice(employee_id, 1);
  }

  addEmployee(employee: EmployeeNetland): void{
    this.employees.push(employee);
  }

  updateEmployee(updatedEmployee: EmployeeNetland, employeeIndex: number): void{
    const updatedEmployees: EmployeeNetland[] = this.employees.map( (employee, index) => (index === employeeIndex) ? updatedEmployee : employee);
    this.employees = updatedEmployees;
  }

}
