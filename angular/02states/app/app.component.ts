//component

import {Component} from '@angular/core'
import {ChildComponent} from './child.component'

@Component({
    selector: 'my-app',
    template: `
    <p>Parent</p>
    <input type="text" #t1 (keyup)="0"/>
    {{t1.value}}
    <select #c (change)="0">
    <option *ngFor="let country of countries" value="{{country}}">{{country}}</option>
    </select>
    <p>Selected value: {{c.value}}</p>
    
    <my-child [country]="c.value"></my-child> 
    `,
    directives: [ChildComponent]
        
        })
export class AppComponent{
    
countries: Array<string> = ['India', 'US'];
    
    
    
}