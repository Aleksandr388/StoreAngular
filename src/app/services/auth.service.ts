import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ForgotPasswordModel, LoginModel, RegistrationModel, Tokens } from "../models/auth.model";
import { HttpClient } from '@angular/common/http'
import { Token } from "@angular/compiler/src/ml_parser/lexer";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Auth Service Methods
    constructor(private http: HttpClient) {
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

    forgotpassword(forgot: ForgotPasswordModel){
        return this.http.post('https://localhost:5001/api/Account/ForgotPassword', forgot)
    }

}