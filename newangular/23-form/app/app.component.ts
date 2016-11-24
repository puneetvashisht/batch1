import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles:[`
	button{
	    display: block;
		width: 100%;
	}
  `]
})
export class AppComponent {
	isTemplateDriven = false;
}
