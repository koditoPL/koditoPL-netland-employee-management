import { FormControl, FormGroup, Validators } from '@angular/forms'
import { EmployeeNetland } from 'src/app/core/models/employee.interface'

export class EmployeeFormBulder {
  static initialize(employee: EmployeeNetland): FormGroup {
    return new FormGroup({
      name: new FormControl(employee.name || '', [Validators.required]),
      age: new FormControl(employee.age || null, [
        Validators.required,
        Validators.maxLength(3),
      ]),
      isFullTime: new FormControl(employee.isFullTime),
      position: new FormControl(employee.position || '', [Validators.required]),
    })
  }
}
