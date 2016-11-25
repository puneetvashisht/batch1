import { Component, ViewEncapsulation } from '@angular/core';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  encapsulation: ViewEncapsulation.Native,
  styles: [`
  	div{
		color: corflowerblue;
		border-radius: 15px;
		border: 1px solid darkseagreen;
		text-align: center;
		background: white;
		margin: 25px;
	}
  `],
  template: `
    <div>
		<h2>App Component</h2>
		<home></home>
    </div>
  `
})
export class AppComponent { 
	constructor(){
		console.log('In app component');
	}
}

