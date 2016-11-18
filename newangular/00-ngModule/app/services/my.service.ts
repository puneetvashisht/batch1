import {Injectable} from '@angular/core';

@Injectable()
export class MyService {

    static counter = 0;

    id = 0;

    constructor() {
        this.id = MyService.counter++;
        console.log(`instantiated my service with id ${this.id}`);
    }
	
	
	

}