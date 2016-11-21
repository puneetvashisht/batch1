import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Home } from "./home.component";
import { MyService } from './../services/my.service';
import { SearchByNamePipe } from './../pipes/searchbyname.pipe';
import { BrowserModule }  from '@angular/platform-browser';
import {DisplayComponent} from './display.component'
import {EditComponent} from './edit.component'

@NgModule({
    declarations: [Home, DisplayComponent,EditComponent, SearchByNamePipe],
	providers: [MyService],
	exports: [Home],
    imports: [
    //provides Browser specific renderers, and installs core directives like ngIf, ngFor, etc
    BrowserModule,
    FormsModule    
    ],
  
    bootstrap: [ Home ]
})
export class HomeModule {
	constructor(){
		console.log('In Home module');
	}

}