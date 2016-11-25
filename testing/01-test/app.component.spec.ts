/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { ReversePipe } from "./reverse.pipe";
import { UserService } from './user.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { inject } from '@angular/core/testing';


describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));
});


////////  SPECS  /////////////
describe('AppComponent', function () {
	// provides nativeElements/HtmlElements
  let de: DebugElement;
	  // get test component from the fixture
  let comp: AppComponent;
	  // creates component and test fixture
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
	  // TestBed creates an Angular testing module— an @NgModule class
	  // creates an instance of the component-under-test and probe/inspect that instance with tests
   TestBed.configureTestingModule({
      declarations: [ AppComponent, ReversePipe ],
	   providers:    [ UserService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
	  // query for the title <h2> by CSS element selector
    de = fixture.debugElement.query(By.css('#title'));
  });

	// component test
  it('should create component', () => expect(comp).toBeDefined() );

	
	// component element test
  it('should have expected <h2>(title) text', () => {
	  // trigger change detection to update the view
    fixture.detectChanges();
    const titleHead = de.nativeElement;
    expect(titleHead.innerText).toMatch('Reverse Pipe Demo');
	expect(titleHead.textContent).toContain('Reverse Pipe Demo');
  });
	
	
	
	//pipe test
	// This pipe is a pure, stateless function so no need for BeforeEach
	it('Reverse "puneet"', () => {
		let pipe = new ReversePipe();
		expect(pipe.transform('puneet')).toBe('teenup');
	});
	
	
	
	// service test
	it('should welcome the user', () => {
		fixture.detectChanges();
		const content = fixture.debugElement.query(By.css('.welcome')).nativeElement;
		expect(content.textContent).toContain('carl');
	});

	
});


