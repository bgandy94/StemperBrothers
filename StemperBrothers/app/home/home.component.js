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
            _this.returnMsg = data;
        }, function (error) { return _this.error = error; });
        this.clear();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQUVqRCxnQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxzQkFBc0IsaUJBQWlCLENBQUMsQ0FBQTtBQUN4QywyQkFBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQWF0RDtJQUVJLHVCQUFvQixPQUFlLEVBQVUsZUFBK0I7UUFBeEQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQVNwRSxTQUFJLEdBQVUsSUFBSSxhQUFLLEVBQUUsQ0FBQztJQVQ4QyxDQUFDO0lBRWpGLGdDQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBU0QscUNBQWEsR0FBYjtRQUFBLGlCQWFDO1FBWkcsbUdBQW1HO1FBQ25HLGVBQWU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ25DLFNBQVMsQ0FDVixVQUFBLElBQUk7WUFDQSxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUMzRCxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCLFVBQWlCLElBQVk7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBcERMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUUsZ0NBQWMsQ0FBRTtZQUM3QixVQUFVLEVBQUUsQ0FBRSwyQkFBYyxDQUFFO1lBQzlCLElBQUksRUFBRTtnQkFDRixtQkFBbUIsRUFBRSxNQUFNO2dCQUMzQixpQkFBaUIsRUFBRSxTQUFTO2FBQy9CO1NBQ0osQ0FBQzs7cUJBQUE7SUE0Q0Ysb0JBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBO0FBM0NZLHFCQUFhLGdCQTJDekIsQ0FBQSIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBDb250YWN0U2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvY29udGFjdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVtYWlsIH0gZnJvbSBcIi4uL3NoYXJlZC9pbmRleFwiO1xyXG5pbXBvcnQgeyByb3V0ZUFuaW1hdGlvbiB9IGZyb20gXCIuLi9zaGFyZWQvYW5pbWF0aW9uc1wiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiaG9tZS1wYWdlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogWyBDb250YWN0U2VydmljZSBdLFxyXG4gICAgYW5pbWF0aW9uczogWyByb3V0ZUFuaW1hdGlvbiBdLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbQHJvdXRlQW5pbWF0aW9uXSc6ICd0cnVlJyxcclxuICAgICAgICAnW3N0eWxlLmRpc3BsYXldJzogXCInYmxvY2snXCJcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9jb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2UpIHsgfVxyXG4gICAgXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGVtYWlsQWRkcmVzczogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBtYWlsOiBFbWFpbCA9IG5ldyBFbWFpbCgpO1xyXG4gICAgcHJpdmF0ZSByZXR1cm5Nc2c6IHN0cmluZztcclxuICAgIHByaXZhdGUgZXJyb3I6IHN0cmluZztcclxuXHJcbiAgICBzdWJtaXRDb250YWN0KCkge1xyXG4gICAgICAgIC8vYWxlcnQoXCIgTmFtZTogXCIgKyB0aGlzLm5hbWUgKyBcIlxcclxcbiBOdW1iZXI6IFwiICsgdGhpcy5udW1iZXIgKyBcIlxcclxcbiBRdWVzdGlvbjogXCIgKyB0aGlzLnF1ZXN0aW9uKTtcclxuICAgICAgICAvL3RoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm1haWwubmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICB0aGlzLm1haWwuZW1haWxBZGRyZXNzID0gdGhpcy5lbWFpbEFkZHJlc3M7XHJcbiAgICAgICAgdGhpcy5tYWlsLnF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbjtcclxuICAgICAgICB0aGlzLl9jb250YWN0U2VydmljZS5zZW5kTWFpbCh0aGlzLm1haWwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXR1cm5Nc2cgPSBkYXRhO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yID0gZXJyb3IpO1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0Zvcm1WYWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbWFpbEFkZHJlc3MgJiYgdGhpcy5uYW1lICYmIHRoaXMucXVlc3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub1RyZWVTZXJ2aWNlcyhsaW5rOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiL3NlcnZpY2VzXCIsIHtsaW5rOiBsaW5rfV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5lbWFpbEFkZHJlc3MgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBcIlwiO1xyXG4gICAgfVxyXG59Il19
