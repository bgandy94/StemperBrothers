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
//# sourceMappingURL=home.component.js.map