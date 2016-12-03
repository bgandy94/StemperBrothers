import { NgModule }      from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [ HomeRoutingModule, FormsModule, HttpModule ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }