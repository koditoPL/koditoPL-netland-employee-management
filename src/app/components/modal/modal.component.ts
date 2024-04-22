import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { EmployeeNetland } from 'src/app/core/models/employee.interface'
import { EmployeesService } from 'src/app/core/services/employees.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() deleteEmployee: EventEmitter<string> = new EventEmitter<string>();
  @Output() closeModal: EventEmitter<number | null> = new EventEmitter<
    number | null
  >();
  @Input() openModal?: boolean;
  @Input() employeeIndex: number | null = null;

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {}

  deleteNetlandEmployee(): void {
    if (this.employeeIndex !== null) {
      this.employeesService.removeEmployee(this.employeeIndex);
      this.close(this.employeeIndex);
    }
  }

  close(employeeIndex: number | null = null): void {
    this.closeModal.emit(employeeIndex);
  }
}
