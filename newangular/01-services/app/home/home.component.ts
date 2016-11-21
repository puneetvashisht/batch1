import { Component, ViewEncapsulation } from '@angular/core';
import { MyService } from './../services/my.service';




@Component({
    selector: 'my-app',
	encapsulation: ViewEncapsulation.Native,
	styles: [`
  	div{
		color: white;
		border-radius: 15px;
		border: 1px solid white;
		text-align: center;
		background: black;
		margin: 15px;
	}
  `],
    template: `<h2>Main Component !</h2>
               <h3>My Service Id = {{myService.id}}</h3>
    <display></display>           
    <edit></edit>           
               `
            
})
export class Home {

    constructor(private myService: MyService) {

    }

}