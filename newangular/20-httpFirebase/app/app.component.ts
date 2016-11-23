import { Component } from '@angular/core';
import { Response } from '@angular/http';

import {Observable} from 'rxjs/Rx';

import { MyHttpService } from "./my-http.service";

@Component({
	moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MyHttpService]
})
export class AppComponent {
    title: string;
    empData: Employee[] = [];
    isNewEmp: boolean = false;
    isEdit: boolean = false;
    previousEmp: Employee;
    constructor(private httpService: MyHttpService) {}

	ngOnInit(){
		this.loadData();
	}
    loadData() {
        this.empData = [];// delete previous data before fetching new data
        this.httpService.getData()
            .subscribe(
                data => {
                    console.log(data);// array of responses (title and emp)
                    this.title = data[0];
                    for(let key in data[1]){
                        let emp = data[1][key];
                        emp.key = key;
                        this.empData.push(emp);
                    }
                },
                err => console.error(err)
            );
    }
    newEmp(){
        this.isNewEmp = true;
    }
    addNewEmp(id, name, age){
        this.isNewEmp = false;
        console.log(id);
        console.log(name);
        console.log(age);

        let emp = {id: id, name: name, age: age};
        this.httpService.postData(emp)
            .subscribe(
                data => {console.log(data)},
                error => console.log(error)
            );
    }

    editEmp(emp){
        this.isEdit = true;
        this.previousEmp = emp;
    }

    updateEmp(id, name, age){
        let newEmp = {id: id, name: name, age: age, };
        this.httpService.putData(newEmp, this.previousEmp.key)
            .subscribe(
                data => {console.log(data)},
                error => console.log(error)
            );

        this.isEdit = false;
    }
    deleteEmp(emp){
        this.httpService.deleteData(emp)
            .subscribe(
                data => {console.log(data);},
                error => console.log(error)
            );

        this.isEdit = false;
    }
}