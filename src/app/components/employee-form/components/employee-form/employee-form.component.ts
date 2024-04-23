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
  public employeeForm!: FormGroup;
  public positions: Position[] = [];

  @Input() employee!: EmployeeNetland;
  @Input() editedId: number | null = null;

  constructor(private employeesService: EmployeesService, private router: Router) {}

  ngOnInit(): void {
    this.positions = Object.values(Position);
    this.employeeForm = EmployeeFormBulder.initialize(this.employee);
  }

  changeValid(event: any) {
    (+event.target.value <= 0 || +event.target.value > 110)
      ? this.employeeForm.get('age')?.setValue(null)
      : null;
  }

  onSubmit(): void {
    if(this.employeeForm.valid){
      if(!this.editedId){
        this.employeesService.addEmployee(this.employeeForm.value);
      }
      else{
        this.employeesService.updateEmployee(this.employeeForm.value, +this.editedId);
      }
      this.router.navigate(['/']);
    }
  }

}
