import {Pipe, PipeTransform} from '@angular/core';
import {Employee} from './../services/my.service'

    @Pipe({
        name: 'filterByName'
        })
export class SearchByNamePipe implements PipeTransform{
    
transform(employees: Array<Employee>, ...args: any[]) : any{
    
let emps: Array<Employee>= [];
    
for(let employee of employees){
if(employee.name.startsWith(args[0])){
    emps.push(employee);
}
}
return emps;    
    
}
    
}