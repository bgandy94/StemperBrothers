import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/observable";
import "./rxjs-operators";

import { Email } from "./index";

@Injectable()
export class ContactService {
    constructor(private _http: Http) { }

    private routePrefix: string = "api/contact/";

    sendMail(mail: Email): Observable<string> {
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.routePrefix + "sendmail", { mail }, options)
            .map(res => this.extractData(res))
            .catch(err => this.handleError(err));
    };

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || "";
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}