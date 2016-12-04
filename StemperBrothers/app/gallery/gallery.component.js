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
var GalleryComponent = (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
        $("#gallery").lightGallery({
            thumbnail: true
        });
    };
    Object.defineProperty(GalleryComponent.prototype, "routeAnimation", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostBinding("@flyInOut"), 
        __metadata('design:type', Object)
    ], GalleryComponent.prototype, "routeAnimation", null);
    GalleryComponent = __decorate([
        core_1.Component({
            selector: "gallery-page",
            templateUrl: "./app/gallery/gallery.component.html",
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateX(-100%)' }),
                        core_1.animate(100)
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate(100, core_1.style({ transform: 'translateX(100%)' }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUV3QixlQUFlLENBQUMsQ0FBQTtBQXNCeEM7SUFBQTtJQVVBLENBQUM7SUFURyxtQ0FBUSxHQUFSO1FBQ0ksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUN2QixTQUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRXlCLHNCQUFJLDRDQUFjO2FBQWxCO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQzs7O09BQUE7SUFGRDtRQUFDLGtCQUFXLENBQUMsV0FBVyxDQUFDOzswREFBQTtJQXhCN0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHNDQUFzQztZQUNuRCxVQUFVLEVBQUU7Z0JBQ1IsY0FBTyxDQUFDLFVBQVUsRUFBRTtvQkFDaEIsWUFBSyxDQUFDLElBQUksRUFBRSxZQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztvQkFDbEQsaUJBQVUsQ0FBQyxXQUFXLEVBQUU7d0JBQ3BCLFlBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxDQUFDO3dCQUN6QyxjQUFPLENBQUMsR0FBRyxDQUFDO3FCQUNmLENBQUM7b0JBQ0YsaUJBQVUsQ0FBQyxXQUFXLEVBQUU7d0JBQ3BCLGNBQU8sQ0FBQyxHQUFHLEVBQUUsWUFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztxQkFDekQsQ0FBQztpQkFDTCxDQUFDO2FBQ0w7U0FDSixDQUFDOzt3QkFBQTtJQVlGLHVCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSx3QkFBZ0IsbUJBVTVCLENBQUEiLCJmaWxlIjoiZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0QmluZGluZyxcclxuICAgIHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUsXHJcbiAgICBzdHlsZSwgc3RhdGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuZGVjbGFyZSB2YXIgbGc6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZ2FsbGVyeS1wYWdlXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdmbHlJbk91dCcsIFtcclxuICAgICAgICAgICAgc3RhdGUoJ2luJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9KSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcclxuICAgICAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknIH0pLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgxMDApXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKDEwMCwgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyB9KSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICBdKVxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgJChcIiNnYWxsZXJ5XCIpLmxpZ2h0R2FsbGVyeSh7XHJcbiAgICAgICAgICAgIHRodW1ibmFpbDogdHJ1ZVxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxuXHJcbiAgICBASG9zdEJpbmRpbmcoXCJAZmx5SW5PdXRcIikgZ2V0IHJvdXRlQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il19
