import {Injectable} from '@angular/core';

export class Employee{
constructor(public name:string, public role:string){
    
}
}


@Injectable()
export class MyService {

employees: Array<Employee> = [];

    id = 0;

    constructor() {
        let emp1: Employee = new Employee('Amit', 'Admin');
        let emp2: Employee = new Employee('Ravi', 'Finance');
        this.employees.push(emp1);    
        this.employees.push(emp2);    
    
    }
	
	
	

}