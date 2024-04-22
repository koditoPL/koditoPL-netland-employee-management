import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { EmployeesListComponent } from './components/employees-list/employees-list.component'
import { HttpClientModule } from '@angular/common/http'
import { EmployeesListModule } from './components/employees-list/employees-list.module'

@NgModule({
  declarations: [AppComponent],
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
