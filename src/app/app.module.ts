import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { EmployeesListComponent } from './components/employees-list/employees-list.component'
import { HttpClientModule } from '@angular/common/http'
import { EmployeesListModule } from './components/employees-list/employees-list.module';
import { EmployeeCreateComponent } from './components/employee-form/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-form/employee-edit/employee-edit.component';
import { EmployeeFormComponent } from './components/employee-form/components/employee-form/employee-form.component'

@NgModule({
  declarations: [AppComponent, EmployeeCreateComponent, EmployeeEditComponent, EmployeeFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeesListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
