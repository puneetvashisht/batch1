import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'my-app',
    encapsulation: ViewEncapsulation.Emulated,// default
    styles: [`
    .test {
      padding: 10px;
		background: cornflowerblue;
    }
  `],
    template: `
    	<div class="test">
      		<div>
        		Title: {{name.value}}
      		</div>
      		<input type="text" #name (keyup)='0' value="ng2">
			<hr/>
        </div>
  `
})
export class AppComponent { }
/*      <p>
        encapsulation: ViewEncapsulation.Emulated.<br/>
        In Web Components, the “host” element is the root (declared in the HTML) element, and the rest inside is purely the content of that contained element.<br/>
        It means that CSS we write globally will inherit, however styles defined using the same class inside the Component will be locally scoped to that Component only.
        </p>*/