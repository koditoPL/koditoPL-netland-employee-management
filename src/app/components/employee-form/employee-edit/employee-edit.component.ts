import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeNetland, Position } from 'src/app/core/models/employee.interface';
import { EmployeesService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit{
  public editEmployee!: EmployeeNetland;
  public editedId!: number;

  constructor(private activatedRoute: ActivatedRoute,private employeesService: EmployeesService){
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (param) => {
        this.editEmployee =  this.employeesService.getOneEmployees(param['id']);
        this.editedId = param['id'];
      }
    })
  }
}
