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
import { PrintingEditionPageComponent } from './components/printing-edition/printing-edition-page/printing-edition-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'edition-page', pathMatch: 'full' },
  { path: 'login', canActivate: [UserGuard], component: LoginComponent },
  { path: 'register', canActivate: [UserGuard], component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },    
  { path: 'confirm-email', component: ConfirmEmailComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'edition-page', component: PrintingEditionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
