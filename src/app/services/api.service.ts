import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({

    providedIn: "root"
})

export class APIService{

    constructor(
        private http: HttpClient
    ){}

     getPaises(): any {
        return this.http.get(environment.URL);
     }

     async getInfo() {
        const request = this.http.get(environment.URL);
        const info: any = await lastValueFrom(request);
        return info;
     }

     }