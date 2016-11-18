//component

import {Component} from '@angular/core'
import {ThumbnailComponent} from './thumbnail.component'
import {Thumbnail} from './thumbnail'

@Component({
    selector: 'my-app',
    template: `
    <p>Change some text</p>
        <div *ngFor="let obj of tArray">
    {{obj.title}}
<my-thumbnail [title]="obj.title" [summary]="obj.summary"></my-thumbnail>
        </div>
    `,
    directives: [ThumbnailComponent]
        
        })
export class AppComponent{
    
    t1: Thumbnail = new Thumbnail('Angular', 'framework by Google');
    t2: Thumbnail = new Thumbnail('React', 'library by Facebook');
    tArray: Array<Thumbnail> = [this.t1, this.t2];
    
    
    
    
    
    
    
    
    
    
    
    
    
}