"use strict";
var user_service_1 = require('./user.service');
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/core/testing');
////////  SPECS  /////////////
describe('UserSercvice', function () {
    beforeEach(testing_1.async(function () {
        // TestBed creates an Angular testing module— an @NgModule class
        // creates an instance of the component-under-test and probe/inspect that instance with tests
        testing_1.TestBed.configureTestingModule({
            providers: [user_service_1.UserService]
        })
            .compileComponents();
    }));
    it('#isLoggedIn should return false after creation', testing_2.inject([user_service_1.UserService], function (service) {
        expect(service.isLoggedIn()).toBeFalsy();
    }));
});
//# sourceMappingURL=user.service.spec.js.map