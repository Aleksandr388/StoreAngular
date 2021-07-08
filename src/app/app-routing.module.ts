import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/account/forgot-password/forgot-password.component';
import { LoginComponent } from './components/account/login/login.component';
import { LogoutComponent } from './components/account/logout/logout/logout.component';
import { RegisterComponent } from './components/account/register/register.component';

const routes: Routes = [
  {  path: '', redirectTo: 'register', pathMatch:'full' },
  {  path: 'login', component: LoginComponent },
  {  path: 'register', component: RegisterComponent },
  {  path: 'logout', component: LogoutComponent },
  {  path: 'forgot-password', component: ForgotPasswordComponent }            
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
