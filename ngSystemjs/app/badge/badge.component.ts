import { Component, Input } from "@angular/core";

@Component({
    selector: 'my-badge',
	styles: [`
		button{
			margin-left: 15px;
			margin-top: 5px;
		}
	`],
    template: `
        <button class="btn btn-primary" type="button" (click)="incrementCount()">
            {{text}} <span class="badge">{{count}}</span>
        </button>
`
})
export class BadgeComponent {
    @Input('text') text = 'Message';
    @Input('count') count = 0;

    incrementCount() {
        this.count++;
    }
}