import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Tokens } from "src/app/models/auth.model";
import { AuthService } from "src/app/services/auth.service";
import { ForgotPassword, Login, Logout, Registration } from "../actions/auth.action";
import { tap } from 'rxjs/operators';

export interface AuthStateModel {
  signIn: boolean;
  tokens: Tokens | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    tokens: null,
    signIn: false,
  }
})

@Injectable()
export class AuthState {

  constructor(private authService: AuthService, private router: Router) { }

  @Selector()
  static jwtToken(state: AuthStateModel) {
    return state.tokens?.accesToken;
  }

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.authService
      .login(action.payload)
      .pipe(
        tap((result) => {
          ctx.setState({ tokens: result, signIn: true }),
            localStorage.setItem("refreshToken", result.refreshToken);
          this.router.navigate(['']);
        })
      );
  }
  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    return this.authService.logout().pipe(
      tap(() => {
        ctx.patchState({
          tokens: null,
          signIn: false
        });
        localStorage.removeItem("refreshToken"),
          this.router.navigate(['login']);
      })
    );
  }

  @Action(Registration)
  registration(ctx: StateContext<AuthStateModel>, action: Registration) {
    return this.authService.registration(action.payload).pipe(
      tap(() => {
        if (true) {
          this.router.navigate(['confirm-email'])
        }
        else {
          console.error();
        }
      })
    )
  }

  @Action(ForgotPassword)
  forgotpassword(ctx: StateContext<AuthStateModel>, action: ForgotPassword) {
    return this.authService.forgotpassword(action.payload).pipe(
      tap(() => {
        this.router.navigate(['/login'])
      })
    )
  }
}
