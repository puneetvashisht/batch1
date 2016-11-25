import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PanelListComponent } from './components/panelList';
import { PanelComponent } from './components/panel';
import { BadgeComponent } from './components/badge';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, PanelListComponent, PanelComponent, BadgeComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
