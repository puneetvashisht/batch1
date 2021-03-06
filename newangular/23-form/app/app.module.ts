import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DataDrivenComponent } from "./data-driven/data-driven.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";


@NgModule({
    declarations: [AppComponent, DataDrivenComponent, TemplateDrivenComponent],
    imports: [BrowserModule, ReactiveFormsModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}