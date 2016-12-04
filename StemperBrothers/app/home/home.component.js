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
var router_1 = require("@angular/router");
var contact_service_1 = require("../shared/contact.service");
var index_1 = require("../shared/index");
var animations_1 = require("../shared/animations");
var HomeComponent = (function () {
    function HomeComponent(_router, _contactService) {
        this._router = _router;
        this._contactService = _contactService;
        this.mail = new index_1.Email();
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    HomeComponent.prototype.submitContact = function () {
        var _this = this;
        //alert(" Name: " + this.name + "\r\n Number: " + this.number + "\r\n Question: " + this.question);
        //this.clear();
        this.mail.name = this.name;
        this.mail.emailAddress = this.emailAddress;
        this.mail.question = this.question;
        this._contactService.sendMail(this.mail)
            .subscribe(function (data) {
            if (data === "Success") {
                _this.emailMsg = "Your message has been received successfully!";
                $("#emailStatus").show().delay(3000).fadeOut();
                _this.clear();
            }
            else {
                _this.emailMsg = "An error occured. Call 405-808-4368 or try again.";
                $("#emailStatus").show().delay(3000).fadeOut();
            }
        }, function (error) { return _this.error = error; });
    };
    HomeComponent.prototype.isFormValid = function () {
        return this.emailAddress && this.name && this.question;
    };
    HomeComponent.prototype.goToTreeServices = function (link) {
        this._router.navigate(["/services", { link: link }]);
    };
    HomeComponent.prototype.clear = function () {
        this.name = "";
        this.emailAddress = "";
        this.question = "";
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home-page",
            templateUrl: "./app/home/home.component.html",
            providers: [contact_service_1.ContactService],
            animations: [animations_1.routeAnimation],
            host: {
                '[@routeAnimation]': 'true',
                '[style.display]': "'block'"
            }
        }), 
        __metadata('design:paramtypes', [router_1.Router, contact_service_1.ContactService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDO0FBQUQsQ0FsREEsQUFrREMsSUFBQTtBQWxEWSxxQkFBYSxnQkFrRHpCLENBQUEiLCJmaWxlIjoiaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQ29udGFjdFNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2NvbnRhY3Quc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFbWFpbCB9IGZyb20gXCIuLi9zaGFyZWQvaW5kZXhcIjtcclxuaW1wb3J0IHsgcm91dGVBbmltYXRpb24gfSBmcm9tIFwiLi4vc2hhcmVkL2FuaW1hdGlvbnNcIjtcclxuXHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaG9tZS1wYWdlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogW0NvbnRhY3RTZXJ2aWNlXSxcclxuICAgIGFuaW1hdGlvbnM6IFtyb3V0ZUFuaW1hdGlvbl0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tAcm91dGVBbmltYXRpb25dJzogJ3RydWUnLFxyXG4gICAgICAgICdbc3R5bGUuZGlzcGxheV0nOiBcIidibG9jaydcIlxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2NvbnRhY3RTZXJ2aWNlOiBDb250YWN0U2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBlbWFpbE1zZzogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBlbWFpbEFkZHJlc3M6IHN0cmluZztcclxuICAgIHByaXZhdGUgcXVlc3Rpb246IHN0cmluZztcclxuICAgIHByaXZhdGUgbWFpbDogRW1haWwgPSBuZXcgRW1haWwoKTtcclxuICAgIHByaXZhdGUgcmV0dXJuTXNnOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGVycm9yOiBzdHJpbmc7XHJcblxyXG4gICAgc3VibWl0Q29udGFjdCgpIHtcclxuICAgICAgICAvL2FsZXJ0KFwiIE5hbWU6IFwiICsgdGhpcy5uYW1lICsgXCJcXHJcXG4gTnVtYmVyOiBcIiArIHRoaXMubnVtYmVyICsgXCJcXHJcXG4gUXVlc3Rpb246IFwiICsgdGhpcy5xdWVzdGlvbik7XHJcbiAgICAgICAgLy90aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5tYWlsLm5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgdGhpcy5tYWlsLmVtYWlsQWRkcmVzcyA9IHRoaXMuZW1haWxBZGRyZXNzO1xyXG4gICAgICAgIHRoaXMubWFpbC5xdWVzdGlvbiA9IHRoaXMucXVlc3Rpb247XHJcbiAgICAgICAgdGhpcy5fY29udGFjdFNlcnZpY2Uuc2VuZE1haWwodGhpcy5tYWlsKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSBcIlN1Y2Nlc3NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1haWxNc2cgPSBcIllvdXIgbWVzc2FnZSBoYXMgYmVlbiByZWNlaXZlZCBzdWNjZXNzZnVsbHkhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNlbWFpbFN0YXR1c1wiKS5zaG93KCkuZGVsYXkoMzAwMCkuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWFpbE1zZyA9IFwiQW4gZXJyb3Igb2NjdXJlZC4gQ2FsbCA0MDUtODA4LTQzNjggb3IgdHJ5IGFnYWluLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZW1haWxTdGF0dXNcIikuc2hvdygpLmRlbGF5KDMwMDApLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvciA9IGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0Zvcm1WYWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbWFpbEFkZHJlc3MgJiYgdGhpcy5uYW1lICYmIHRoaXMucXVlc3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub1RyZWVTZXJ2aWNlcyhsaW5rOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL3NlcnZpY2VzXCIsIHsgbGluazogbGluayB9XSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLmVtYWlsQWRkcmVzcyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IFwiXCI7XHJcbiAgICB9XHJcbn0iXX0=
