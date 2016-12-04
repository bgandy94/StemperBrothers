import { Component, OnInit } from '@angular/core';
import { Router, Params } from "@angular/router";

import { ContactService } from "../shared/contact.service";
import { Email } from "../shared/index";
import { routeAnimation } from "../shared/animations";


@Component({
    selector: "home-page",
    templateUrl: "./app/home/home.component.html",
    providers: [ ContactService ],
    animations: [ routeAnimation ],
    host: {
        '[@routeAnimation]': 'true',
        '[style.display]': "'block'"
    }
})
export class HomeComponent implements OnInit {

    constructor(private _router: Router, private _contactService: ContactService) { }
    
    ngOnInit() {
        window.scrollTo(0, 0);
    }

    private name: string;
    private emailAddress: string;
    private question: string;
    private mail: Email = new Email();
    private returnMsg: string;
    private error: string;

    submitContact() {
        //alert(" Name: " + this.name + "\r\n Number: " + this.number + "\r\n Question: " + this.question);
        //this.clear();
        this.mail.name = this.name;
        this.mail.emailAddress = this.emailAddress;
        this.mail.question = this.question;
        this._contactService.sendMail(this.mail)
            .subscribe(
            data => {
                this.returnMsg = data;
            },
            error => this.error = error);
        this.clear();
    }

    isFormValid() {
        return this.emailAddress && this.name && this.question;
    }

    goToTreeServices(link: string) {
        this._router.navigate(["/services", {link: link}]);
    }

    clear() {
        this.name = "";
        this.emailAddress = "";
        this.question = "";
    }
}