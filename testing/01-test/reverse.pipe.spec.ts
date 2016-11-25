/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { ReversePipe } from "./reverse.pipe";


////////  SPECS  /////////////
describe('ReversePipe', function () {

	// This pipe is a pure, stateless function so no need for BeforeEach
		it('should reverse "puneet"', () => {
			let pipe = new ReversePipe();
			expect(pipe.transform('puneet')).toBe('test');
		});
	
});


