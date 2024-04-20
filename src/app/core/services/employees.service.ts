import { Injectable } from '@angular/core'
import { EmployeeNetland, Position } from '../models/employee.interface'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private employeesUrl: string = 'assets/employees.json'

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<EmployeeNetland[]> {
    return this.http.get<EmployeeNetland[]>(this.employeesUrl)
  }
}
