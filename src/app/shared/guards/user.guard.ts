import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of} from 'rxjs';
import { Store } from '@ngxs/store';

@Injectable({
    providedIn: 'root'
})

export class UserGuard implements CanActivate {
    constructor(private _store : Store, private router : Router){
    }
    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot): Observable<boolean> {
        let isSignIn$!:Boolean;
        this._store.select(ourState => ourState.auth.signIn).subscribe((res)=>{
            if(res){
                this.router.navigate(['']);
                return of(false)
            }
            return of(true);
        });
        return of(true);
    }
}