import { Component, ViewChild } from '@angular/core';
import { BadgeComponent } from './badge/badge.component';

@Component({
	selector: 'my-app',
	styles:[`
	`],
	template: `
		<h1>Badge </h1>
		<my-badge [text]="list.text" [count]="list.count"></my-badge>
		<button  class="btn btn-default btn-lg" (click)="update()">Update From Parent</button>
	`
})

export class AppComponent{
	// ViewChild takes a class type or a reference name string.
	// Here we are using the type
	@ViewChild(BadgeComponent) badge: BadgeComponent
	list = {text: 'Inbox', count: 10};

	ngAfterViewInit() {
		// After the view is initialized, this.userProfile will be available
		this.update();
	}

	update() {
		this.badge.incrementCount();
	}
	
}