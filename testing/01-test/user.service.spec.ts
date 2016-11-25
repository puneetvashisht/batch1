/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { ReversePipe } from "./reverse.pipe";
import { UserService } from './user.service';

import { async, TestBed } from '@angular/core/testing';
import { inject } from '@angular/core/testing';


////////  SPECS  /////////////
describe('UserSercvice', function () {

  beforeEach(async(() => {
	  // TestBed creates an Angular testing module— an @NgModule class
	  // creates an instance of the component-under-test and probe/inspect that instance with tests
   TestBed.configureTestingModule({
	  providers:    [ UserService ]
    })
    .compileComponents();
  }));
	
it('#isLoggedIn should return false after creation', inject([UserService], (service: UserService) => {
    expect(service.isLoggedIn()).toBeFalsy();
  }));	

});


