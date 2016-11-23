import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {

  param: string;

  constructor(private route: ActivatedRoute) {
  }

}
