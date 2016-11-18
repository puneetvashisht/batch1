import { NgModule } from '@angular/core';
import { Home } from "./home.component";
import { MyService } from './../services/my.service';

@NgModule({
    declarations: [Home],
	providers: [MyService],
	exports: [Home]
})
export class HomeModule {
	constructor(){
		console.log('In Home module');
	}

}