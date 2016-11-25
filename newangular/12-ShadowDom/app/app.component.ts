import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'my-app',
    encapsulation: ViewEncapsulation.None,
      styles: [`
    .test {
      	padding: 10px;
		background: cornflowerblue;
		font-size: 3em;
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
export class AppComponent {
}
/*      <p>
        encapsulation: ViewEncapsulation.None.<br/>
        It means that CSS we write globally will inherit, however styles defined using the same class inside the Component will override existing styling.<br/>
        Every css is global
        </p>*/