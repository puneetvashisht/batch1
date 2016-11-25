import {Component, Input} from "@angular/core";
import {PanelComponent} from "./panel";

@Component({
    selector: "panel-list",
    template: `
		<panel [title]="title" [number]="number" [header]="header" [description]="description" [imageUrl]="imageUrl"></panel>
	`
    
})

export class PanelListComponent{
	@Input('title') title;
    @Input('number') number;
    @Input('header') header;
    @Input('description') description;
    @Input('imageUrl') imageUrl;
}