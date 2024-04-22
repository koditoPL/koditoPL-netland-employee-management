import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { EmployeeFormBulder } from './employee-form.builder'
import {
  EmployeeNetland,
  Position,
} from 'src/app/core/models/employee.interface'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm: FormGroup;
  public positions: Position[] = [];

  @Input() employee: EmployeeNetland = this.emptyEmployes;

  constructor() {
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
    console.log(this.employeeForm);
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
