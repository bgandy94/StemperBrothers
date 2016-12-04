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
var index_1 = require("../shared/index");
var GalleryComponent = (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
        $("#gallery").lightGallery({
            thumbnail: true
        });
    };
    GalleryComponent = __decorate([
        core_1.Component({
            selector: "gallery-page",
            templateUrl: "./app/gallery/gallery.component.html",
            animations: [index_1.routeAnimation],
            host: {
                '[@routeAnimation]': 'true',
                '[style.display]': "'block'"
            }
        }), 
        __metadata('design:paramtypes', [])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUV3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxzQkFBK0IsaUJBQWlCLENBQUMsQ0FBQTtBQWVqRDtJQUFBO0lBT0EsQ0FBQztJQU5HLG1DQUFRLEdBQVI7UUFDSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFmTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFVBQVUsRUFBRSxDQUFDLHNCQUFjLENBQUM7WUFDNUIsSUFBSSxFQUFFO2dCQUNGLG1CQUFtQixFQUFFLE1BQU07Z0JBQzNCLGlCQUFpQixFQUFFLFNBQVM7YUFDL0I7U0FDSixDQUFDOzt3QkFBQTtJQVNGLHVCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSx3QkFBZ0IsbUJBTzVCLENBQUEiLCJmaWxlIjoiZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0QmluZGluZyxcclxuICAgIHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUsXHJcbiAgICBzdHlsZSwgc3RhdGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcm91dGVBbmltYXRpb24gfSBmcm9tIFwiLi4vc2hhcmVkL2luZGV4XCI7XHJcblxyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJnYWxsZXJ5LXBhZ2VcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgYW5pbWF0aW9uczogW3JvdXRlQW5pbWF0aW9uXSwgXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tAcm91dGVBbmltYXRpb25dJzogJ3RydWUnLFxyXG4gICAgICAgICdbc3R5bGUuZGlzcGxheV0nOiBcIidibG9jaydcIlxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgJChcIiNnYWxsZXJ5XCIpLmxpZ2h0R2FsbGVyeSh7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbDogdHJ1ZVxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxufSJdfQ==
