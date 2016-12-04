import { Component, OnInit, HostBinding,
    trigger, transition, animate,
    style, state } from '@angular/core';
import { routeAnimation } from "../shared/index";

declare var $: any;


@Component({
    selector: "gallery-page",
    templateUrl: "./app/gallery/gallery.component.html",
    animations: [routeAnimation], 
    host: {
        '[@routeAnimation]': 'true',
        '[style.display]': "'block'"
    }
})

export class GalleryComponent implements OnInit {
    ngOnInit() {
        $("#gallery").lightGallery({
            thumbnail: true
        }); 
    }
}