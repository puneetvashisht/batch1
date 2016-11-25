import { Component, ViewChild } from '@angular/core';
import { BadgeComponent } from './badge/badge.component';

@Component({
	selector: 'my-app',
	styles:[`
	`],
	template: `
		<h1>Badge </h1>
		<my-badge #badge1 [text]="list[0].text" [count]="list[0].count"></my-badge>
		<my-badge #badge2 [text]="list[1].text" [count]="list[1].count"></my-badge>
		<button  class="btn btn-default btn-lg" (click)="update()">Update From Parent</button>
	`
})

export class AppComponent{
	// ViewChild takes a class type or a reference name string.
	// Here we are using the type
	@ViewChild('badge1') badge1: BadgeComponent
	@ViewChild('badge2') badge2: BadgeComponent
	
	list = [
		{text: 'Inbox', count: 10},
		{text: 'Outbox', count: 5}
	];

	ngAfterViewInit() {
		// After the view is initialized, this.userProfile will be available
		this.update();
	}

	update() {
		this.badge1.incrementCount();
		this.badge2.incrementCount();
	}
	
}