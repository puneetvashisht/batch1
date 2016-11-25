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
var AppComponent = (function () {
    function AppComponent() {
        this.list = [
            { text: 'Inbox', count: 201 },
            { text: 'Sent', count: 36 },
            { text: 'Trash', count: 15 }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: [],
            template: "\n\t\t<h1>Badge </h1>\n\t\t<div *ngFor=\"let obj of list\">\n\t\t\t<my-badge [text]=\"obj.text\" [count]=\"obj.count\"></my-badge>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map