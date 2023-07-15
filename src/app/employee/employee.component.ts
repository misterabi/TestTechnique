import { Component, Input } from '@angular/core';
import { Employee } from '../interface/employee.interface';
import { MatDialog  } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { ConfirmEditDialogComponent } from '../shared/edit-confirm-dialogue/confirm-edit-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  UserIcon = 'assets/images/user.png';
  UserEditIcon = 'assets/images/edit-user.png';
  UserDeleteIcon = 'assets/images/delete-user.png';
  @Input() employee!: Employee;

  constructor(private dialog: MatDialog) {}

  saveEmployeeToLocalStorage(employee: Employee): void {
    const employeesStr = localStorage.getItem('employees');
    let employees: Employee[] = [];
    if (employeesStr) {
      employees = JSON.parse(employeesStr);
    }
    const existingEmployeeIndex = employees.findIndex((emp) => emp.Id === employee.Id);
    if (existingEmployeeIndex !== -1) {
      employees[existingEmployeeIndex] = employee; 
    }
    localStorage.setItem('employees', JSON.stringify(employees));
  }
  
  
  editEmployee(employee: Employee): void {
    const dialogRef = this.dialog.open(ConfirmEditDialogComponent,
      {
        data: employee.Position
      });

    dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.employee.Position = result;
          this.saveEmployeeToLocalStorage(this.employee);
        }
      });
  }



  
  deleteEmployeeFromLocalStorage(employee: Employee): void {
    const employeesStr = localStorage.getItem('employees');
    let employees: Employee[] = [];
    if (employeesStr) {
      employees = JSON.parse(employeesStr);
      employees = employees.filter((emp) => emp.Id !== employee.Id);
      localStorage.setItem('employees', JSON.stringify(employees));
      window.location.reload();
    }
  }

  deleteEmployee(employee: Employee): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,
      {
        data: employee.FirstName + ' ' + employee.SecondName
      });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteEmployeeFromLocalStorage(employee);
      }
    });
  }

}
