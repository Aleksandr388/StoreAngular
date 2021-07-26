import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from 'src/app/components/account/register/register.component';
import { LoginComponent } from 'src/app/components/account/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from 'src/app/components/account/forgot-password/forgot-password.component';
import { ConfirmEmailComponent } from 'src/app/components/account/confirm-email/confirm-email.component';
import { ProfileComponent } from 'src/app/components/user/profile/profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ConfirmEmailComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class AuthModule { }
