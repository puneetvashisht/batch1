import {Component, Input} from '@angular/core'
import {BadgeComponent} from "./badge.component"

    @Component({
        selector: 'my-thumbnail',
        template: `
        
        <div class="row">
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img src="..." alt="...">
              <div class="caption">
                <h3>{{title}}</h3>
                <p>{{summary}}</p>
                <p><my-badge text="Inbox" count="3"></my-badge></p>
              </div>
            </div>
          </div>
        </div>
        
        `
                ,
    directives: [BadgeComponent]
        })

export class ThumbnailComponent{
@Input('title') title: string = "Default" 
@Input('summary') summary: string = "Default Summary" 
}








