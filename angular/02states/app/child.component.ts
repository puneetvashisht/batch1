import {Component, Input} from '@angular/core'
@Component({
    selector: 'my-child',
    template: `
    <hr>
    <h1>Child Component</h1>
    {{country}}
<br>
    {{cities}}
    
    
        
        })

export class ChildComponent{
    
@Input ('country') country:string = "default" 

cities: Array<string>
usCities: Array<string> = ['NY', 'LV'];    
indiaCities: Array<string> = ['Delhi', 'Mumbai']    
ngOnChanges(){
    console.log('everytime input prop changes')
if(this.country == 'India'){
    this.cities = this.indiaCities;
}
else{
    this.cities = this.usCities;
}

    
    
    
    
    
    
    
    
    
    
    
}