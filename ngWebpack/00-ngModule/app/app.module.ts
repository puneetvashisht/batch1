import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HomeModule }  from './home/home.module';
import { AppComponent } from './app.component';
//import { MyService } from './services/my.service';

@NgModule({
  imports: [
    //provides Browser specific renderers, and installs core directives like ngIf, ngFor, etc
    BrowserModule, 
	
	HomeModule
  ],
  declarations: [AppComponent],
//	providers: [MyService],
  bootstrap: [ AppComponent ]
})

export class AppModule {
	constructor(){
		console.log('In App module');
	}
}
