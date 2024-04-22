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

  removeEmployee(employee_id: number): void {
    this.employees.splice(employee_id, 1);
  }

  addEmployee(employee: EmployeeNetland): void{
    this.employees.push(employee);
  }

}
