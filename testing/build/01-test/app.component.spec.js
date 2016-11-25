"use strict";
/* tslint:disable:no-unused-variable */
var app_component_1 = require('./app.component');
var reverse_pipe_1 = require("./reverse.pipe");
var user_service_1 = require('./user.service');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
describe('1st tests', function () {
    it('true is true', function () { return expect(true).toBe(true); });
});
////////  SPECS  /////////////
describe('AppComponent', function () {
    // provides nativeElements/HtmlElements
    var de;
    // get test component from the fixture
    var comp;
    // creates component and test fixture
    var fixture;
    beforeEach(testing_1.async(function () {
        // TestBed creates an Angular testing module— an @NgModule class
        // creates an instance of the component-under-test and probe/inspect that instance with tests
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent, reverse_pipe_1.ReversePipe],
            providers: [user_service_1.UserService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        // query for the title <h2> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('#title'));
    });
    // component test
    it('should create component', function () { return expect(comp).toBeDefined(); });
    // component element test
    it('should have expected <h2>(title) text', function () {
        // trigger change detection to update the view
        fixture.detectChanges();
        var titleHead = de.nativeElement;
        expect(titleHead.innerText).toMatch('Reverse Pipe Demo');
        expect(titleHead.textContent).toContain('Reverse Pipe Demo');
    });
    //pipe test
    // This pipe is a pure, stateless function so no need for BeforeEach
    it('Reverse "puneet"', function () {
        var pipe = new reverse_pipe_1.ReversePipe();
        expect(pipe.transform('puneet')).toBe('teenup');
    });
    // service test
    it('should welcome the user', function () {
        fixture.detectChanges();
        var content = fixture.debugElement.query(platform_browser_1.By.css('.welcome')).nativeElement;
        expect(content.textContent).toContain('carl');
    });
});
//# sourceMappingURL=app.component.spec.js.map