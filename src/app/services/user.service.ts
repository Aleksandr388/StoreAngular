import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Store } from "@ngxs/store";
import { StoreUserModel } from "../models/auth.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient, private store: Store,) {
    }
    getUserData(token: string){
        debugger
        return this.http.get<StoreUserModel>('https://localhost:5001/api/User/GetByIdUser?token='+token)
    }

    updateUserProfile(user: StoreUserModel){
        return this.http.post<StoreUserModel>('https://localhost:5001/api/User/UpdateUser', user)
    }

}