import { NgModule, Component, Input, Attribute } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';

import { Greeter } from './services';

@Component({
  selector: 'ciao',
  template: '<p>{{ message$ | async }}</p>',
})
export class Ciao {
  constructor(greeter: Greeter, route: ActivatedRoute) {
    this.message$ = route.params
      .map(params => greeter.say('ciao', params.name));
  }
}

@Component({
  selector: 'linker',
  template: '<p><a [href]="url" [title]="name">{{ name }}</a></p>',
})
export class Linker {
  @Input() url;

  constructor(@Attribute('name') name) {
    this.name = name;
  }
}

@Component({
  selector: 'hello-app',
  template: `
    <ul>
      <li><a [routerLink]="['/']">Hello</a></li>
      <li><a [routerLink]="['/ciao', 'ng2']">Ciao</a></li>
    </ul>
    <router-outlet></router-outlet>
    <linker name="SomeUrl" url="#"></linker>
  `,
})
export class HelloApp {
}

const routing = RouterModule.forRoot([
  { path: '', component: HelloApp },
  { path: 'ciao/:name', component: Ciao },
]);

@NgModule({
  imports: [
    BrowserModule,
    routing,
  ],
  declarations: [
    HelloApp,
    Ciao,
    Linker,
  ],
  providers: [
    Greeter,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [HelloApp],
})
export class AppModule {
}
