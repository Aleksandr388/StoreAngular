import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ForgotPasswordModel, LoginModel, RegistrationModel, StoreUserModel, Tokens } from "../models/auth.model";
import { HttpClient } from '@angular/common/http'
import { Store } from "@ngxs/store";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Auth Service Methods
    constructor(private http: HttpClient, private store: Store,) {
    }

    login(signIn: LoginModel): Observable<Tokens> {
        return this.http.post<Tokens>('https://localhost:5001/api/Account/SignIn', signIn, { headers: { 'Content-Type': 'application/json' } });
    }

    logout(): Observable<null> {
        return of(null);
    }

    registration(register: RegistrationModel) {
        return this.http.post('https://localhost:5001/api/Account/SignUp', register)
    }

    forgotpassword(forgot: ForgotPasswordModel) {
        return this.http.post('https://localhost:5001/api/Account/ForgotPassword', forgot)
    }

    loggedIn() {
        return !!localStorage.getItem('token')
    }

    restoreToken() {
    }

}