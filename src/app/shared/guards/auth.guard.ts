import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from 'rxjs';
import { Store } from '@ngxs/store';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private _store: Store, private router: Router, private jwtHelperService: JwtHelperService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        this._store.select(ourState => ourState.auth.signIn).subscribe(
            (res) => {
                const accesToken = localStorage.getItem('accesToken');
                let isTokenLife = this.jwtHelperService.isTokenExpired(accesToken!)
                if (isTokenLife) {
                    this.router.navigate(['']);
                }
                if (!res) {
                    this.router.navigate(['/login']);
                    return of(false);
                }
                return of(true);
            }
        )
        return of(true);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route, state);
    }
}