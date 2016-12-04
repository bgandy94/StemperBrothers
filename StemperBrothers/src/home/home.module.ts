import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [ HomeRoutingModule, FormsModule, HttpModule, BrowserModule ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }