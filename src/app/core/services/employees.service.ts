import { Injectable } from '@angular/core'
import { EmployeeNetland, Position } from '../models/employee.interface'
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private employeesUrl: string = 'assets/employees.json'
  private employees: EmployeeNetland[] = []

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<EmployeeNetland[]> {
    return this.http
      .get<EmployeeNetland[]>(this.employeesUrl)
      .pipe(tap((data) => (this.employees = data)))
  }

  removeEmployee(employee_id: number): void {
    this.employees.splice(employee_id, 1)
  }
}
