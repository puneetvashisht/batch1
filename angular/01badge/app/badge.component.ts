import {Component, Input} from '@angular/core'
@Component({
    selector: 'my-badge',
    template: `
    <button class="btn btn-primary" type="button">
    {{text}}<span class="badge">{{count}}</span>
    </button>
    
    `
        
        })

export class BadgeComponent{
    
@Input('text')  text: string
@Input('count')  count: number
    
}