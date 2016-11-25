import { Component } from '@angular/core';
//import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  template: `
		<h2 id='title'>Reverse Pipe Demo</h2>
		<input type="text" #input (keyup)="0" placeholder="Enter some text">
		<h2>Reverse: {{input.value | reverse}}</h2>
		<hr/>
		<button (click)="getUser()">ChangeUser</button>
		<h3 class="welcome" >{{user.name}}</h3>
	`,
  styles: [`
    .pipes {
      margin: 32px;
      padding: 32px;
    }
  `]
})
export class AppComponent {
	user: any = {name: "carl", age: 22};
//	constructor(private userService: UserService){ }
	getUser(){
//		this.user = this.userService.getUser();
	}
}
