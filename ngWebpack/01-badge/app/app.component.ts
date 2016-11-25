import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	styles:[],
	template: `
		<h1>Badge </h1>
		<div *ngFor="let obj of list">
			<my-badge [text]="obj.text" [count]="obj.count"></my-badge>
		</div>
	`
})

export class AppComponent{
	list = [
			{text: 'Inbox', count: 201},
			{text: 'Sent', count: 36},
			{text: 'Trash', count: 15}
		];
}