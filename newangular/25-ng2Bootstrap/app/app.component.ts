import { Component, ViewChild } from '@angular/core';
import {AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	selector: 'my-app',
	styles:[`
	`],
	template: `
		<h1>ng2-bootstrap demo</h1>
		<alert type="info">ng2-bootstrap hello world!</alert>
		<alert type="danger">ng2-bootstrap hello world!</alert>
		<pre>
			Selected date is: <em *ngIf="dt">{{ getDate() | date:'fullDate'}}</em>
		</pre>
		<alert type="success">
			Selected date is: <em *ngIf="dt">{{ getDate() | date:format}}</em>
		</alert>
		<h4>Inline</h4>
		<div style="display:inline-block; min-height:290px;">
			<datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true"></datepicker>
		</div>
	`
})

export class AppComponent{
	public dt:Date = new Date();
	private minDate:Date = null;
	private formats:Array<string> = ['dd-MM-yyyy', 'yyyy/MMM/dd', 'dd.MM.yyyy', 'shortDate'];
	private format = this.formats[2];

	public getDate():number {
		return this.dt && this.dt.getTime() || new Date().getTime();
	}
}