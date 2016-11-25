import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'my-app',
    encapsulation: ViewEncapsulation.Emulated,
    // encapsulation: ViewEncapsulation.Native,
    styles: [`
    .test {
      padding: 10px;
		background: cornflowerblue;
    }
    :host {
		display: block;
		background: darkseagreen;
		padding: 10px;
    }
  `],
    template: `
		<h3>:host</h3>
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
        :host selector.<br/>
        background now spans the full root element using the :host selector.<br/>
        :host selector targets the declared element, not any of the Component’s children (such as the template).<br/>
        
        </p>*/