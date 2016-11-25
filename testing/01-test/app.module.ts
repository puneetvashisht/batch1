import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user.service';

import { AppComponent }  from './app.component';
import { ReversePipe } from "./reverse.pipe";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ReversePipe ],
	providers:  [UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
