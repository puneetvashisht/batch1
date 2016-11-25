import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
		

@NgModule({
	imports:      [ BrowserModule, FormsModule, Ng2BootstrapModule ],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
