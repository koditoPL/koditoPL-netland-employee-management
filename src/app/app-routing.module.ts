import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EmployeesListComponent } from './components/employees-list/employees-list.component'
import { EmployeeCreateComponent } from './components/employee-form/employee-create/employee-create.component'

const routes: Routes = [
  {
    path: '',
    component: EmployeesListComponent,
  },
  {
    path: 'new-employee',
    component: EmployeeCreateComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
