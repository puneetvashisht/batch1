import {Component} from '@angular/core'
import {MyService, Employee} from './../services/my.service'
    @Component({
        selector: 'edit',
        template: `
        
        <h3>Edit component</h3>
        
    
<input type="text" [(ngModel)]="employee.name">
<input type="text" [(ngModel)]="employee.role">
<button (click)="addEmployee()">Add Employee</button>        
        `
        })
export class EditComponent{

    employee: Employee = new Employee('','');    

addEmployee(){
    console.log(this.employee.name);  this.myService.employees.push(this.employee);
}
    
constructor(private myService: MyService){
    
}
    
    
    
    
    
    
    
}