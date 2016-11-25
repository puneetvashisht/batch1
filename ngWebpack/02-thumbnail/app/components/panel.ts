import {Component, Input} from "@angular/core";
import {BadgeComponent} from "./badge";

@Component({
    selector: "panel",
    template: `
		<div class="col-md-4 col-sm-4 col-xs-4">
                <div class="panel panel-default">
                    <div class="panel-heading">

                        <h3 class="panel-title">{{header}}</h3>
                    </div>
                    <div class="panel-body">
                        <img src={{imageUrl}} alt="..." class="img-responsive img-thumbnail"/>
                        <p>{{description}}</p>
                        <div>
                            <badge [title]="title" [number]="number" ></badge>
                        </div>
                    </div>
                </div>
            </div>
	`
})

export class PanelComponent{
	@Input('title') title;
    @Input('number') number;
    @Input('header') header;
    @Input('description') description;
    @Input('imageUrl') imageUrl;
}