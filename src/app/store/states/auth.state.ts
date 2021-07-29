import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { StoreUserModel, Tokens } from "src/app/models/auth.model";
import { AuthService } from "src/app/services/auth.service";
import { ForgotPassword, GetUserData, Login, Logout, Registration, RestoreToken, UpdateUserProfile } from "../actions/auth.action";
import { tap } from 'rxjs/operators';
import { UserService } from "src/app/services/user.service";

export interface AuthStateModel {
  signIn: boolean;
  tokens: Tokens | null;
  user: StoreUserModel | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    tokens: null,
    signIn: false,
    user: null
  }
})

@Injectable()
export class AuthState {

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  @Selector() 
  static user (state:AuthStateModel) :StoreUserModel | null { 
    return state.user;
  }
  @Selector()
  static accesToken(state: AuthStateModel) {
    return state.tokens?.accesToken;
  }

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.authService
      .login(action.payload)
      .pipe(
        tap((result) => {
          if (result.accesToken || result.refreshToken !== undefined){
            ctx.setState({ tokens: result, signIn: true, user: null }),
              localStorage.setItem("refreshToken", result.refreshToken),
              localStorage.setItem("accesToken", result.accesToken)
          this.router.navigate(['']);
          }
          else{
            this.router.navigate(['login']);
          }
        })
      );
  }
  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    return this.authService.logout().pipe(
      tap(() => {
        ctx.patchState({
          tokens: null,
          signIn: false,
          user: null
        });
        localStorage.removeItem("refreshToken"),
        localStorage.removeItem("accesToken")
          this.router.navigate(['nav-bar']);
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

  @Action(RestoreToken)
  restoreToken(ctx: StateContext<AuthStateModel>) {
    const refreshToken = localStorage.getItem('refreshToken');
    const accesToken = localStorage.getItem('accesToken');
    if (refreshToken && accesToken) {
      const state = ctx.getState();
      ctx.patchState({
        ...state,
        signIn: true,
        tokens: {
          accesToken: accesToken,
          refreshToken: refreshToken
        }
      })
    }
  }

  @Action(GetUserData)
  getUserData(ctx: StateContext<AuthStateModel>, action: GetUserData) {
    const accesToken = localStorage.getItem('accesToken');
    return this.userService.getUserData(accesToken!).pipe(
      tap(result => {
        ctx.patchState({ user: result as any })
      },
      ));
  }

  @Action(UpdateUserProfile)
  updateUserProfile(ctx: StateContext<AuthStateModel>, action: UpdateUserProfile) {
    const accesToken = localStorage.getItem('accesToken');
    return this.userService.updateUserProfile(action.payload).subscribe(
      () =>{ ctx.dispatch(new GetUserData(accesToken!));}
    );    
  }
}