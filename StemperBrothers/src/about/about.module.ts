﻿import { NgModule }      from "@angular/core";

import { AboutRoutingModule }  from "./about-routing.module";

import { AboutComponent } from "./about.component";

@NgModule({
    imports: [AboutRoutingModule],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})
export class AboutModule { }