import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { EmployeeNetland } from 'src/app/core/models/employee.interface'
import { EmployeesService } from 'src/app/core/services/employees.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() deleteEmployee: EventEmitter<string> = new EventEmitter<string>()
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() openModal?: boolean
  @Input() employeeIndex?: number

  constructor() {}

  ngOnInit(): void {}

  deleteNetlandEmployee(): void {}

  close(): void {
    this.closeModal.emit(true)
  }
}
