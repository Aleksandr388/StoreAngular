import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';

const routes: Routes = [
  {  path: 'login', component: LoginComponent },
  {  path: '', redirectTo: 'login', pathMatch:'full' },
  {  path: 'register', component: RegisterComponent }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
