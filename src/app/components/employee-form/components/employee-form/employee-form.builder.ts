import { FormControl, FormGroup } from '@angular/forms'
import { EmployeeNetland } from 'src/app/core/models/employee.interface'

export class EmployeeFormBulder {
  static initialize(employee: EmployeeNetland): FormGroup {
    return new FormGroup({
      name: new FormControl(employee.name || ''),
      age: new FormControl(employee.age || null),
      isFullTime: new FormControl(employee.isFullTime),
      position: new FormControl(employee.position || ''),
    })
  }
}
