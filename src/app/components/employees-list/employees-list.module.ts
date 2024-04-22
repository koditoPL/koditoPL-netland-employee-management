import { NgModule } from '@angular/core'
import { EmployeesListComponent } from './employees-list.component'
import { ModalComponent } from '../modal/modal.component'
import { ModalModule } from '../modal/modal.module'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [EmployeesListComponent],
  imports: [BrowserModule, CommonModule, ModalModule, RouterModule],
  providers: [],
  bootstrap: [],
})
export class EmployeesListModule {}
