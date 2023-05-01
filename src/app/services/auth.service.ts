import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({providedIn: "root"})
export class AuthService{
    get currentUser(){
        return of({username: "helloworld", articles: ["title-1"]})
    }

}
