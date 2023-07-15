import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeesListComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
