import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { EmployeeNetland } from 'src/app/core/models/employee.interface'
import { EmployeesService } from 'src/app/core/services/employees.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() deleteObject: EventEmitter<string> = new EventEmitter<string>()
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>()
  @Input() employeeName?: string
  @Input() employeeIndex?: number

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    console.log(this.employeeIndex)
  }

  isOpen: boolean = false

  open(): void {
    this.isOpen = true
  }

  deleteEmployee(): void {}

  close(): void {}
}
