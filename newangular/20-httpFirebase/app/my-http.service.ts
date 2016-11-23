import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { Employee } from "./employee";

@Injectable()
export class MyHttpService {

	private myDatabaseUrl: string;
	
  constructor(private http: Http) {
//	  https://console.firebase.google.com/project/
  	this.myDatabaseUrl = 'https://angular2-http-demo.firebaseio.com/';
  }

  getData() {

    return Observable.forkJoin(
        this.http.get(this.myDatabaseUrl+'title.json').map((res:Response) => res.json()),
        this.http.get(this.myDatabaseUrl+'emp.json').map((res:Response) => res.json())
    );

  }


  postData(emp: any) {
    const body = JSON.stringify(emp);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.myDatabaseUrl+'emp.json', body, {
      headers: headers
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }
  putData(emp: any, key) {
    const body = JSON.stringify(emp);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.myDatabaseUrl+'emp/'+key+'.json', body, {
          headers: headers
        })
        .map((data: Response) => data.json())
        .catch(this.handleError);
  }

  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
  deleteData(emp: Employee) {
    const headers = new Headers();
    return this.http.delete(this.myDatabaseUrl+'emp/'+emp.key+'.json')
        .map((data: Response) => data.json())
        .catch(this.handleError);
  }
}
