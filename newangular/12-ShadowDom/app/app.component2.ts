import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'my-app',
    encapsulation: ViewEncapsulation.Native,
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
export class AppComponent {
}
/*      <p>
        encapsulation: ViewEncapsulation.Native.<br/>
        Everything inside ▾ #shadow-root is Shadow DOM, it’s fully scoped to itself and a separate DOM tree altogether.<br/>
        It means that CSS we write globally will not inherit, however styles defined using the same class inside the Component will be locally scoped to that Component only, which is exactly what’s expected with Shadow DOM.
        </p>*/