import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmEmailComponent } from './components/account/confirm-email/confirm-email.component';
import { ForgotPasswordComponent } from './components/account/forgot-password/forgot-password.component';
import { LoginComponent } from './components/account/login/login.component';
import { LogoutComponent } from './components/account/logout/logout.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { RegisterComponent } from './components/account/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'nav-bar', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },    
  { path: 'confirm-email', component: ConfirmEmailComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
