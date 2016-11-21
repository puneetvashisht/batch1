import {Component} from '@angular/core'
import {MyService, Employee} from './../services/my.service'
    @Component({
        selector: 'display',
        template: `
        
        <h3>Employees -- </h3>
        <input type="text" #searchOnName (keyup)="0" placeholder="Search By Name" />
    
        <table>
            <tr *ngFor="let employee of myService.employees | filterByName:searchOnName.value">
        <td>{{employee.name}}</td>
        <td>{{employee.role}}</td>
            </tr>
        </table>
        `
        })
export class DisplayComponent{
    constructor(private myService: MyService){
    
}
}