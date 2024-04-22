import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { EmployeeFormBulder } from './employee-form.builder'
import {
  EmployeeNetland,
  Position,
} from 'src/app/core/models/employee.interface'
import { EmployeesService } from 'src/app/core/services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm: FormGroup;
  public positions: Position[] = [];

  @Input() employee: EmployeeNetland = this.emptyEmployes;

  constructor(private employeesService: EmployeesService, private router: Router) {
    this.employeeForm = EmployeeFormBulder.initialize(this.employee);
  }

  ngOnInit(): void {
    this.positions = Object.values(Position)
  }

  changeValid(event: any) {
    (+event.target.value <= 0 || +event.target.value > 110)
      ? this.employeeForm.get('age')?.setValue(null)
      : null;
  }

  onSubmit(): void {
    if(this.employeeForm.valid){
      this.employeesService.addEmployee(this.employeeForm.value);
      this.router.navigate(['/']);
    }
  }

  get emptyEmployes(): EmployeeNetland {
    return {
      name: '',
      age: null,
      isFullTime: false,
      position: Position.Junior,
    }
  }
}
