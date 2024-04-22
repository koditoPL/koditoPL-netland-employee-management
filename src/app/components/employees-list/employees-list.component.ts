import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { take } from 'rxjs'
import { EmployeeNetland } from 'src/app/core/models/employee.interface'
import { EmployeesService } from 'src/app/core/services/employees.service'

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  public openModal: boolean = false;
  public removedEmployeeId: number | null = null;

  public displayedColumns: string[] = [
    'Imię i nazwisko',
    'Wiek',
    'Pracownik pełnoetatowy',
    'Stanowisko',
  ];
  public employees: EmployeeNetland[] = [];

  constructor(
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.employees = this.employeesService.getEmployees();
  }

  deleteEmployee(index: number) {
    this.removedEmployeeId = index;
    this.openModal = true;
  }

  closeModal(): void {
    this.openModal = false;
  }
}
