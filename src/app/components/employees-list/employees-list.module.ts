import { NgModule } from '@angular/core'
import { EmployeesListComponent } from './employees-list.component'
import { ModalComponent } from '../modal/modal.component'
import { ModalModule } from '../modal/modal.module'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [EmployeesListComponent],
  imports: [BrowserModule, CommonModule, ModalModule],
  providers: [],
  bootstrap: [],
})
export class EmployeesListModule {}
