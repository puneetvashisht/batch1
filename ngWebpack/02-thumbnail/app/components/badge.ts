import {Component, Input} from "@angular/core";

@Component({
    selector: "badge",
    template: `
		<button class="btn btn-primary" type="button">
            {{title}}
			<span class="badge">{{number}}</span>
        </button>
	`
})

export class BadgeComponent{
	@Input('title') title;
    @Input('number') number;
}