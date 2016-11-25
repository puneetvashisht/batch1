import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	
	private loggedIn: boolean = false;
private user: any = {name: "Ravi", age: 34};

  isLoggedIn() {
    return this.loggedIn;
  }

  getUser() {
    return this.user;
  }
}
