import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interface/employee.interface';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchTerm: string = '';
  constructor(private http: HttpClient) {}

  filterEmployees(event : Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.filteredEmployees = this.employees.filter(
      (employee) =>
        employee.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.SecondName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.Position.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.searchTerm = searchTerm;
    
  }
  

  ngOnInit(): void {
    const employeesStr = localStorage.getItem('employees');
    if (employeesStr != null && employeesStr.length > 2) {
      this.employees = JSON.parse(employeesStr);
      this.filteredEmployees = this.employees;
    } else {
      this.http.get<Employee[]>('assets/data/employees.json').subscribe(
        (data) => {
          this.employees = data;
          this.filteredEmployees = data;
          localStorage.setItem('employees', JSON.stringify(this.employees));
        },
        (error) => {
          console.error('Failed to load employees', error);
        }
      );
    }
  }
}
