import { Component } from '@angular/core'
import { EmployeeNetland, Position } from 'src/app/core/models/employee.interface';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent {


  get emptyEmployes(): EmployeeNetland {
    return {
      name: '',
      age: null,
      isFullTime: false,
      position: Position.Junior,
    }
  }
}
