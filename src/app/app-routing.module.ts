import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmEmailComponent } from './components/account/confirm-email/confirm-email.component';
import { ForgotPasswordComponent } from './components/account/forgot-password/forgot-password.component';
import { LoginComponent } from './components/account/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/account/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UserGuard } from './shared/guards/user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'nav-bar', pathMatch: 'full' },
  { path: 'login', canActivate: [UserGuard], component: LoginComponent },
  { path: 'register', canActivate: [UserGuard], component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },    
  { path: 'confirm-email', component: ConfirmEmailComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
