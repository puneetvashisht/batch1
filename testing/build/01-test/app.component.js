"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { UserService } from './user.service';
var AppComponent = (function () {
    function AppComponent() {
        this.user = { name: "carl", age: 22 };
    }
    //	constructor(private userService: UserService){ }
    AppComponent.prototype.getUser = function () {
        //		this.user = this.userService.getUser();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<h2 id='title'>Reverse Pipe Demo</h2>\n\t\t<input type=\"text\" #input (keyup)=\"0\" placeholder=\"Enter some text\">\n\t\t<h2>Reverse: {{input.value | reverse}}</h2>\n\t\t<hr/>\n\t\t<button (click)=\"getUser()\">ChangeUser</button>\n\t\t<h3 class=\"welcome\" >{{user.name}}</h3>\n\t",
            styles: ["\n    .pipes {\n      margin: 32px;\n      padding: 32px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map